import { VercelRequest, VercelResponse } from '@vercel/node'
import { getContacts } from './storage.js'

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

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    })
  }

  try {
    const contactsList = await getContacts()
    
    res.json({
      success: true,
      data: contactsList
    })
  } catch (error) {
    console.error('Get contacts error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contacts'
    })
  }
}