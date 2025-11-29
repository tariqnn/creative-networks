// Hostinger Node.js Server Configuration
// This file is used when deploying to Hostinger with Node.js support

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = parseInt(process.env.PORT || '3000', 10)

// Initialize Next.js app
const app = next({ 
  dev,
  hostname,
  port,
  dir: __dirname
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the request URL
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      // Handle Next.js requests
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  }).listen(port, hostname, (err) => {
    if (err) {
      console.error('Failed to start server:', err)
      process.exit(1)
    }
    console.log(`> Ready on http://${hostname}:${port}`)
    console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`)
  })
})

