import { Router } from 'express'
import { contactSchema } from '@shared/types/index.js'
import { storage } from '../storage.js'

const router = Router()

router.post('/', async (req, res) => {
  try {
    // Validate request data
    const validatedData = contactSchema.parse(req.body)
    
    // Store contact
    const contact = await storage.addContact(validatedData)
    
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
})

export default router