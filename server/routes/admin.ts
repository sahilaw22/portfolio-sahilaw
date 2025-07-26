import { Router } from 'express'
import { adminLoginSchema } from '@shared/types/index.js'
import { storage } from '../storage.js'
import '../types.js'

const router = Router()

// Secret code for admin access (change this in production)
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'IamNerd'

// Middleware to check admin authentication
const requireAuth = (req: any, res: any, next: any) => {
  if (!req.session.isAdmin) {
    return res.status(401).json({
      success: false,
      error: 'Authentication required'
    })
  }
  next()
}

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { secretCode } = adminLoginSchema.parse(req.body)
    
    if (secretCode === ADMIN_SECRET) {
      req.session.isAdmin = true
      res.json({
        success: true,
        message: 'Login successful'
      })
    } else {
      res.status(401).json({
        success: false,
        error: 'Invalid secret code'
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: 'Invalid request data'
    })
  }
})

// Admin logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destruction error:', err)
    }
    res.json({ success: true })
  })
})

// Get all contacts (admin only)
router.get('/contacts', requireAuth, async (req, res) => {
  try {
    const contacts = await storage.getContacts()
    res.json({
      success: true,
      data: contacts
    })
  } catch (error) {
    console.error('Get contacts error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contacts'
    })
  }
})

// Delete contact (admin only)
router.delete('/contacts/:id', requireAuth, async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await storage.deleteContact(id)
    
    if (deleted) {
      res.json({
        success: true,
        message: 'Contact deleted successfully'
      })
    } else {
      res.status(404).json({
        success: false,
        error: 'Contact not found'
      })
    }
  } catch (error) {
    console.error('Delete contact error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to delete contact'
    })
  }
})

export default router