import { VercelRequest, VercelResponse } from '@vercel/node'
import { deleteContact } from './storage.js'

// Simple auth check (in production, use proper JWT verification)
function isAuthenticated(req: VercelRequest): boolean {
  const authHeader = req.headers.authorization
  return authHeader === 'Bearer admin-token' || req.headers['x-admin-token'] === 'admin-token'
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, X-Admin-Token'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (!isAuthenticated(req)) {
    return res.status(401).json({
      success: false,
      error: 'Authentication required'
    })
  }

  if (req.method !== 'DELETE') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    })
  }

  try {
    const { id } = req.query
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Contact ID is required'
      })
    }

    const deleted = await deleteContact(id)
    
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
}