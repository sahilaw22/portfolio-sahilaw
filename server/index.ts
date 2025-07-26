import express from 'express'
import session from 'express-session'
import { nanoid } from 'nanoid'
import path from 'path'
import { fileURLToPath } from 'url'
import contactRoutes from './routes/contact.js'
import adminRoutes from './routes/admin.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}))

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../dist/public')))

// API Routes
app.use('/api/contact', contactRoutes)
app.use('/api/admin', adminRoutes)

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public/index.html'))
})

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

export default app