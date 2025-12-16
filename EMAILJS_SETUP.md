# EmailJS Setup Guide

This project uses EmailJS to send contact form submissions via email directly from the frontend.

## Setup Instructions

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)

### 2. Create an Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (e.g., `service_xxxxxxx`)

### 3. Create an Email Template
1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone (optional)
   - `{{company}}` - Sender's company (optional)
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{to_name}}` - Recipient name (SmartClient360 Team)

4. Example template:
```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from the SmartClient360 contact form.
```

5. Copy your **Template ID** (e.g., `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to **Account** > **General** in your EmailJS dashboard
2. Find **API Keys** section
3. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

### 5. Configure Environment Variables
1. Create a `.env` file in the root of your project
2. Add the following variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

### 6. Restart Your Development Server
After adding the `.env` file, restart your React development server:
```bash
npm start
```

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the submission

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure your email template variables match the code

## Security Note
The Public Key is safe to expose in frontend code. EmailJS uses it to identify your account, but it doesn't grant full access. However, you can set up domain restrictions in your EmailJS account for additional security.
