import { VercelRequest, VercelResponse } from '@vercel/node'
import { z } from 'zod'

// Schema definition for admin login
const adminLoginSchema = z.object({
  secretCode: z.string().min(1, 'Secret code is required'),
})

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'IamNerd'

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
    const { secretCode } = adminLoginSchema.parse(req.body)
    
    if (secretCode === ADMIN_SECRET) {
      // In a real application, you would set a secure session/JWT token
      res.json({
        success: true,
        message: 'Login successful',
        token: 'admin-token' // This should be a proper JWT in production
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
}