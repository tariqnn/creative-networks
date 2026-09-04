# Email Setup Instructions

## To Enable Email Sending

1. **Get a Resend API Key:**
   - Go to https://resend.com
   - Sign up for a free account
   - Navigate to API Keys section
   - Create a new API key

2. **Add API Key to Environment:**
   - Create a file named `.env.local` in the root directory
   - Add the following line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. **Verify Your Domain (Optional but Recommended):**
   - In Resend dashboard, add and verify your domain
   - This ensures emails don't go to spam
   - Update the `from` field in `app/api/contact/route.ts` to use your verified domain

4. **Restart Your Development Server:**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

## Email Features

- ✅ High Priority Headers (X-Priority, Importance, Priority)
- ✅ HTML formatted email with professional styling
- ✅ Plain text fallback
- ✅ Proper email headers to avoid spam
- ✅ Sends to: info@creativnetworks.com

## Testing

After setting up the API key, test the contact form. Emails should arrive in the inbox with high priority.

