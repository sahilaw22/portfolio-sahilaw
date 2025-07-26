import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useLocation } from 'wouter'
import { LogOut, Mail, Trash2, Calendar } from 'lucide-react'
import type { Contact } from '@shared/types'

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()
  const [, setLocation] = useLocation()

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/admin/contacts', {
        headers: {
          'X-Admin-Token': token || ''
        }
      })
      const result = await response.json()
      
      if (result.success) {
        setContacts(result.data)
      } else {
        throw new Error(result.error || 'Failed to fetch contacts')
      }
    } catch (error) {
      toast({
        title: "Failed to load contacts",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const deleteContact = async (id: string) => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'X-Admin-Token': token || ''
        }
      })
      
      const result = await response.json()
      
      if (result.success) {
        setContacts(contacts.filter(contact => contact.id !== id))
        toast({
          title: "Contact deleted",
          description: "The contact has been successfully removed.",
        })
      } else {
        throw new Error(result.error || 'Failed to delete contact')
      }
    } catch (error) {
      toast({
        title: "Failed to delete contact",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      })
    }
  }

  const logout = async () => {
    try {
      localStorage.removeItem('adminToken')
      await fetch('/api/admin/logout', { method: 'POST' })
      setLocation('/admin')
    } catch (error) {
      // Logout anyway
      localStorage.removeItem('adminToken')
      setLocation('/admin')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <Button variant="outline" onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <Mail className="mr-2 h-5 w-5" />
            <h2 className="text-xl font-semibold">Contact Messages ({contacts.length})</h2>
          </div>

          {contacts.length === 0 ? (
            <div className="bg-card p-8 rounded-lg border text-center">
              <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
              <p className="text-muted-foreground">
                Contact messages will appear here when visitors submit the contact form.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-card p-6 rounded-lg border"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{contact.name}</h3>
                      <p className="text-muted-foreground">{contact.email}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteContact(contact.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background p-4 rounded border">
                    <p className="whitespace-pre-wrap">{contact.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}