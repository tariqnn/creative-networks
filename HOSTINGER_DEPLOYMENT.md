# Hostinger Deployment Guide

## Quick Setup Instructions

1. **Upload Files to Hostinger**
   - Upload all project files to your Hostinger Node.js hosting directory
   - Ensure `server.js` is in the root directory

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build the Project**
   ```bash
   npm run build
   ```

4. **Start the Server**
   ```bash
   npm start
   ```
   Or use the production script:
   ```bash
   npm run start:prod
   ```

## Configuration Files

### ✅ Already Configured:

1. **`server.js`** - Custom Node.js server for Hostinger
   - Configured to run on port 3000 (or PORT environment variable)
   - Handles static files correctly
   - Production mode enabled

2. **`.htaccess`** - Apache configuration
   - Bypasses Apache for `/_next/` paths
   - Routes requests to Node.js correctly

3. **`next.config.js`** - Next.js configuration
   - Standalone output mode
   - Proper cache headers
   - Production optimizations

4. **`app/api/contact/route.ts`** - Email form API
   - Resend API key is hardcoded (no environment variables needed)
   - Sends emails to: `info@creativnetworks.com`

## Email Form Configuration

The contact form is **already configured** and will work immediately:
- **API Key**: Hardcoded in `app/api/contact/route.ts`
- **Recipient**: `info@creativnetworks.com`
- **No environment variables needed**

## Important Notes

1. **Node.js Version**: Ensure Hostinger supports Node.js 18+ (check in Hostinger control panel)

2. **Port Configuration**: 
   - Default port: 3000
   - Can be changed via `PORT` environment variable in Hostinger

3. **Static Files**: 
   - All `/_next/static/` files are served by Node.js (not Apache)
   - This is configured in `.htaccess`

4. **Build Output**: 
   - Build creates `.next` folder with standalone output
   - Server.js uses this for production

## Troubleshooting

### If static files return 400 errors:
- Check `.htaccess` is uploaded correctly
- Verify Apache is configured to proxy to Node.js
- Contact Hostinger support if issues persist

### If email form doesn't work:
- Check server logs for errors
- Verify Resend API key is valid
- Check that `resend` package is installed

### If server won't start:
- Check Node.js version (should be 18+)
- Verify `npm install` completed successfully
- Check port 3000 is available
- Review server logs for errors

## File Structure

```
/
├── app/                    # Next.js app directory
│   ├── api/
│   │   └── contact/        # Contact form API
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
├── public/                 # Static assets
├── server.js               # Node.js server (IMPORTANT)
├── .htaccess               # Apache config (IMPORTANT)
├── next.config.js          # Next.js config
├── package.json            # Dependencies
└── .next/                  # Build output (generated)
```

## Deployment Checklist

- [x] Server.js configured for production
- [x] .htaccess configured for Next.js
- [x] Email API key hardcoded (no env vars needed)
- [x] Next.js standalone output configured
- [x] Static file caching configured
- [x] Build script ready
- [x] Start script configured

## Support

If you encounter any issues:
1. Check server logs in Hostinger
2. Verify all files are uploaded correctly
3. Ensure Node.js version is 18+
4. Contact Hostinger support for server configuration issues
