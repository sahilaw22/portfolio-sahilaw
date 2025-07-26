import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { config, mockApi } from '../lib/config'

interface ContactFormData {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (config.isStatic) {
        // Static deployment - use mailto fallback
        const mailtoLink = `mailto:${config.contact.fallbackEmail}?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`
        window.location.href = mailtoLink
        setSubmitStatus('success')
      } else {
        // Full-stack deployment - use API
        await mockApi.submitContact(formData)
        setSubmitStatus('success')
      }
      
      // Reset form on success
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Your name"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          placeholder="Your message..."
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white px-6 py-3 rounded-lg transition-colors duration-300"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </motion.div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-green-400 text-sm"
        >
          <CheckCircle size={16} />
          <span>
            {config.isStatic 
              ? "Opening your email client..." 
              : "Message sent successfully!"
            }
          </span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm"
        >
          Something went wrong. Please try again or email directly at {config.contact.fallbackEmail}
        </motion.div>
      )}

      {config.isStatic && (
        <motion.div
          variants={itemVariants}
          className="text-center text-gray-400 text-sm"
        >
          <Mail size={16} className="inline mr-1" />
          Or email directly: 
          <a 
            href={`mailto:${config.contact.fallbackEmail}`}
            className="text-purple-400 hover:text-purple-300 ml-1"
          >
            {config.contact.fallbackEmail}
          </a>
        </motion.div>
      )}
    </motion.form>
  )
}

export default ContactForm