import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Since this is a static deployment, we'll show a message instead of submitting
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitMessage('Thank you for your message! Since this is a static deployment, please email me directly at sahilaw22@gmail.com')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitMessage('Please email me directly at sahilaw22@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-4">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:sahilaw22@gmail.com"
                className="text-primary hover:underline"
              >
                sahilaw22@gmail.com
              </a>
              <a 
                href="https://github.com/sahilaw22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sahil-a-057a0231a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact