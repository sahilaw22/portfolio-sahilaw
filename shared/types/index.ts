import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const adminLoginSchema = z.object({
  secretCode: z.string().min(1, 'Secret code is required'),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type AdminLoginData = z.infer<typeof adminLoginSchema>

export interface Contact {
  id: string
  name: string
  email: string
  message: string
  createdAt: Date
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
}