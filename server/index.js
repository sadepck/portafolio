const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Serve static files from the dist folder in production
app.use(express.static(path.join(__dirname, '../dist')))

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Todos los campos son requeridos' 
    })
  }

  // Here you would typically:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with a CRM

  console.log('New contact form submission:', { name, email, subject, message })

  res.json({ 
    success: true, 
    message: '¡Mensaje recibido! Te contactaré pronto.' 
  })
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Serve React app for all other routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`🔧 Servidor Steampunk corriendo en http://localhost:${PORT}`)
})
