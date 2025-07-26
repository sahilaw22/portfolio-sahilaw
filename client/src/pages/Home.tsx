import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@shared/types'
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MessageSquare } from 'lucide-react'

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        reset()
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              Sahil A
            </motion.h1>
            <div className="flex space-x-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building modern, scalable web applications with React, TypeScript, and Node.js.
              Passionate about creating exceptional user experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <User className="mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating efficient, scalable solutions that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  With a strong foundation in both frontend and backend development, I enjoy 
                  working across the entire technology stack to deliver comprehensive solutions.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" asChild>
                    <a href="https://github.com/sahilaw22" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/sahil-a-057a0231a" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>📍 Based in India</li>
                  <li>💼 Full-Stack Developer</li>
                  <li>🎓 Continuous learner</li>
                  <li>☕ Coffee enthusiast</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Code className="mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>React & TypeScript</div>
                  <div>Next.js & Vite</div>
                  <div>Tailwind CSS</div>
                  <div>Framer Motion</div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>Node.js & Express</div>
                  <div>PostgreSQL</div>
                  <div>Drizzle ORM</div>
                  <div>REST APIs</div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Tools & Deployment</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>Git & GitHub</div>
                  <div>Vercel & Netlify</div>
                  <div>Docker</div>
                  <div>VS Code</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-background p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <Code className="h-12 w-12 text-primary/50" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    A modern web application built with React, TypeScript, and Node.js.
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register('name')}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register('email')}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  {...register('message')}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                <Mail className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t">
              <p className="text-muted-foreground mb-4">Or reach out directly:</p>
              <a 
                href="mailto:sahilaw22@gmail.com"
                className="text-primary hover:underline"
              >
                sahilaw22@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Sahil A. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}