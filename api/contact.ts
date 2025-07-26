import { VercelRequest, VercelResponse } from '@vercel/node'
import { z } from 'zod'
import { addContact } from './storage.js'

// Schema definition for contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    })
  }

  try {
    // Validate request data
    const validatedData = contactSchema.parse(req.body)
    
    // Store contact
    const contact = await addContact(validatedData)
    
    res.json({
      success: true,
      data: contact
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Invalid request data'
    })
  }
}