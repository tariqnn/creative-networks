import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message } = body

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email configuration
    const recipientEmail = 'info@creativnetworks.com'
    const subject = `New Contact Form Submission from ${name}`
    
    // Format the email content - HTML version for better formatting
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #00A8E8 0%, #9D00FF 100%); padding: 30px; border-radius: 10px 10px 0 0; color: white;">
    <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">Creative Networks Website</p>
  </div>
  
  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 150px;">Name:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
          <a href="tel:${phone}" style="color: #00A8E8; text-decoration: none;">${phone}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
          <a href="mailto:${email}" style="color: #00A8E8; text-decoration: none;">${email}</a>
        </td>
      </tr>
      ${message ? `
      <tr>
        <td style="padding: 12px 0; font-weight: bold; vertical-align: top;">Message:</td>
        <td style="padding: 12px 0; white-space: pre-wrap;">${message}</td>
      </tr>
      ` : ''}
    </table>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #00A8E8;">
      <p style="color: #666; font-size: 12px; margin: 0;">
        This email was sent from the Creative Networks website contact form.<br>
        <strong>Priority: High</strong> - Please respond promptly.
      </p>
    </div>
  </div>
</body>
</html>
    `.trim()

    // Plain text version for email clients that don't support HTML
    const textContent = `
New Contact Form Submission
Creative Networks Website

Name: ${name}
Phone: ${phone}
Email: ${email}
${message ? `Message: ${message}` : ''}

---
This email was sent from the Creative Networks website contact form.
Priority: High - Please respond promptly.
    `.trim()

    // Resend API Key - configured for Hostinger deployment
    // Using hardcoded key for easy deployment without environment variables
    const apiKey = process.env.RESEND_API_KEY || 're_3U5fXFcd_8xpLsbbXmht3Q2RdEtqBJMrC'

    // Initialize Resend with API key
    const resend = new Resend(apiKey)

    try {
      const { data, error } = await resend.emails.send({
        from: 'Creative Networks <onboarding@resend.dev>', // Using Resend's default domain - verify your domain in Resend dashboard for better deliverability
        to: recipientEmail,
        subject: subject,
        html: htmlContent,
        text: textContent,
        headers: {
          'X-Priority': '1', // High priority
          'X-MSMail-Priority': 'High',
          'Importance': 'high',
          'Priority': 'urgent',
        },
        tags: [
          { name: 'category', value: 'contact-form' },
          { name: 'priority', value: 'high' },
        ],
      })

      if (error) {
        console.error('Resend API error:', error)
        return NextResponse.json(
          { error: 'Failed to send email. Please try again later.' },
          { status: 500 }
        )
      }

      console.log('Email sent successfully:', data)

      return NextResponse.json(
        { 
          success: true, 
          message: 'Your message has been sent successfully!' 
        },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Error sending email via Resend:', emailError)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    )
  }
}

