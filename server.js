// Hostinger Node.js Server Configuration
// This file is used when deploying to Hostinger with Node.js support

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Force production mode for Hostinger
const dev = false
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
      const { pathname } = parsedUrl

      // Set proper cache headers for static files
      const isStaticFile = pathname?.startsWith('/_next/static/') || 
                          pathname?.startsWith('/_next/webpack/') ||
                          pathname?.startsWith('/_next/data/') ||
                          pathname?.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|mp4|webm)$/i)
      
      if (isStaticFile) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      }

      // Handle Next.js requests
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      if (!res.headersSent) {
        res.statusCode = 500
        res.end('Internal server error')
      }
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

