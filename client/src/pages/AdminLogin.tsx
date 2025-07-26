import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { adminLoginSchema, type AdminLoginData } from '@shared/types'
import { Lock, ArrowLeft } from 'lucide-react'
import { useLocation } from 'wouter'

export default function AdminLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [, setLocation] = useLocation()
  
  const { register, handleSubmit, formState: { errors } } = useForm<AdminLoginData>({
    resolver: zodResolver(adminLoginSchema)
  })

  const onSubmit = async (data: AdminLoginData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      
      if (result.success) {
        // Store the token for authenticated requests
        localStorage.setItem('adminToken', result.token)
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard!",
        })
        setLocation('/admin/dashboard')
      } else {
        throw new Error(result.error || 'Invalid secret code')
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Please check your secret code.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-card p-8 rounded-lg border shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-2xl font-bold">Admin Login</h1>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                type="password"
                placeholder="Enter secret code"
                {...register('secretCode')}
                className={errors.secretCode ? 'border-destructive' : ''}
              />
              {errors.secretCode && (
                <p className="text-destructive text-sm mt-1">{errors.secretCode.message}</p>
              )}
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Authenticating...' : 'Login'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button variant="ghost" asChild>
              <a href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}