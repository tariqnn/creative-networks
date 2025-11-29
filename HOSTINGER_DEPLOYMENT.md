# Hostinger Deployment Guide for Creative Networks Website

This guide will help you deploy your Next.js website to Hostinger.

## Prerequisites

- Hostinger hosting account with Node.js support (Business or higher plan recommended)
- Domain name configured
- FTP/SSH access to your Hostinger account

## Deployment Options

### Option 1: Node.js Hosting (Recommended)

If your Hostinger plan supports Node.js applications:

#### Step 1: Prepare Your Files

1. **Build the project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Create a `.env.production` file** with your production environment variables:
   ```
   RESEND_API_KEY=your_production_resend_api_key
   NODE_ENV=production
   PORT=3000
   ```

#### Step 2: Upload Files to Hostinger

1. **Via File Manager or FTP:**
   - Upload the entire project folder to your Hostinger hosting
   - Recommended location: `public_html/` or a subdirectory

2. **Required files/folders to upload:**
   ```
   ├── .next/          (build output - generated after npm run build)
   ├── app/
   ├── components/
   ├── contexts/
   ├── public/
   ├── node_modules/   (or install on server)
   ├── package.json
   ├── package-lock.json
   ├── next.config.js
   ├── tsconfig.json
   ├── tailwind.config.ts
   ├── postcss.config.js
   └── .env.production (create this with your production keys)
   ```

#### Step 3: Configure Node.js on Hostinger

1. **Access Hostinger Control Panel (hPanel)**
2. **Go to Node.js section**
3. **Create a new Node.js application:**
   - Application Root: `/public_html` (or your subdirectory)
   - Application URL: Your domain
   - Application Startup File: `server.js` or use the standalone server
   - Node.js Version: 18.x or 20.x (recommended)

4. **Set Environment Variables in hPanel:**
   - `NODE_ENV=production`
   - `PORT=3000` (or the port Hostinger assigns)
   - `RESEND_API_KEY=your_resend_api_key`

#### Step 4: Install Dependencies and Start

1. **SSH into your Hostinger account** (if available)
2. **Navigate to your project directory:**
   ```bash
   cd public_html
   ```

3. **Install dependencies:**
   ```bash
   npm install --production
   ```

4. **Build the application:**
   ```bash
   npm run build
   ```

5. **Start the application:**
   ```bash
   npm start
   ```

#### Step 5: Configure Domain

1. Point your domain to the Node.js application URL
2. Update DNS settings if needed
3. Enable SSL certificate (Let's Encrypt) in hPanel

---

### Option 2: Static Export (Alternative - Limited Functionality)

⚠️ **Note:** This option will NOT work with API routes (contact form). Use only if you don't need the contact form functionality.

1. **Update `next.config.js`:**
   ```javascript
   const nextConfig = {
     output: 'export',
     // ... rest of config
   }
   ```

2. **Build static files:**
   ```bash
   npm run build
   ```

3. **Upload the `out/` folder** to `public_html/` on Hostinger

---

## Configuration Files

### `.env.production`

Create this file in your project root with production values:

```env
RESEND_API_KEY=re_your_production_api_key_here
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://creativenetworkservices.com
```

### Server Configuration

If Hostinger provides a `server.js` file, you can use:

```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

---

## Post-Deployment Checklist

- [ ] Verify website loads correctly
- [ ] Test contact form submission
- [ ] Check all images load properly
- [ ] Verify mobile responsiveness
- [ ] Test language switcher (EN/AR)
- [ ] Check SEO meta tags
- [ ] Verify SSL certificate is active
- [ ] Test WhatsApp floating button
- [ ] Check all navigation links work
- [ ] Verify sitemap.xml is accessible
- [ ] Test robots.txt

---

## Troubleshooting

### Issue: Application won't start
- Check Node.js version (should be 18.x or 20.x)
- Verify all dependencies are installed
- Check environment variables are set correctly
- Review Hostinger error logs

### Issue: API routes not working
- Ensure you're using Node.js hosting (not static export)
- Check API route paths are correct
- Verify environment variables are set
- Check server logs for errors

### Issue: Images not loading
- Verify `public/` folder is uploaded correctly
- Check image paths in components
- Ensure Next.js Image optimization is configured

### Issue: Build fails
- Check Node.js version compatibility
- Verify all dependencies are compatible
- Review build error messages
- Try clearing `.next` folder and rebuilding

---

## Support

For Hostinger-specific issues, contact Hostinger support.
For application issues, check the error logs in hPanel.

---

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Hostinger Node.js Guide](https://www.hostinger.com/tutorials/how-to-deploy-node-js-application)
- [Hostinger Support](https://www.hostinger.com/contact)

