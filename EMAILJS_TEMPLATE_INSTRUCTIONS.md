# How to Use the Modern Email Template in EmailJS

## Quick Setup Guide

### Step 1: Open Your EmailJS Template
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Navigate to **Email Templates**
3. Click on your "Contact Us" template (or create a new one)

### Step 2: Update the Subject Line
In the **Subject** field, use:
```
New Contact Form Submission from {{from_name}}
```

### Step 3: Copy the Template Content
1. Open the file `EMAILJS_TEMPLATE_SIMPLE.html` in this project
2. Copy **ALL** the content (Ctrl+A, then Ctrl+C)
3. Go back to EmailJS dashboard
4. Click **"Edit Content"** button in the Content section
5. Switch to **HTML/Code view** (if available) or paste directly
6. Paste the copied content into the Content field
7. Click **"Save"**

### Step 4: Configure Template Variables
Make sure your template uses these variables (they're already in the template):
- `{{to_name}}` - Recipient name (SmartClient360 Team)
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone
- `{{company}}` - Sender's company
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email (same as from_email)

### Step 5: Set Email Settings
In the right panel:
- **To Email**: Your email address (e.g., sravankumarbodakonda@smartclient360.com)
- **From Name**: `SmartClient360 Contact Form`
- **From Email**: Use your default email or service email
- **Reply To**: `{{reply_to}}` or `{{from_email}}`

### Step 6: Test the Template
1. Click **"Test It"** button
2. Fill in test values
3. Send a test email
4. Check your inbox to see the beautiful template!

## Template Features

✅ **Modern Design**
- Gradient header matching your brand colors
- Clean, professional layout
- Card-based information display

✅ **Responsive**
- Works on desktop and mobile
- Optimized for all email clients

✅ **User-Friendly**
- Clear section labels
- Easy-to-read typography
- Highlighted message content

✅ **Action-Oriented**
- Direct "Reply" button
- Clickable email links
- Professional footer

## Customization

### Change Colors
The template uses your brand colors:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Purple)
- Accent: `#43cea2` (Teal)
- Dark: `#185a9d` (Blue)

To change colors, search and replace in the template:
- `#667eea` - Header gradient start
- `#764ba2` - Header gradient middle
- `#43cea2` - Header gradient end, links, accents
- `#185a9d` - Labels, buttons

### Change Logo/Branding
Replace the emoji 🎉 in the header with your logo URL:
```html
<img src="YOUR_LOGO_URL" alt="SmartClient360" style="max-width: 200px;">
```

### Add More Fields
To add more fields, copy this pattern:
```html
<div style="margin-bottom: 20px;">
    <div style="color: #185a9d; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 8px;">FIELD LABEL</div>
    <div style="color: #333333; font-size: 16px;">{{field_name}}</div>
</div>
```

## Troubleshooting

### Template Not Rendering?
- Make sure you're in HTML/Code view when pasting
- Some email clients strip certain CSS - the template uses inline styles for compatibility
- Test with "Test It" button first

### Variables Not Showing?
- Check that variable names match exactly (case-sensitive)
- Variables should be: `{{variable_name}}` with double curly braces
- Make sure variables are defined in your Contact.js form

### Styling Issues?
- Email clients have limited CSS support
- The template uses inline styles for maximum compatibility
- Test in multiple email clients (Gmail, Outlook, Apple Mail)

## Full HTML Version

If you need the complete HTML document version (with DOCTYPE, head, body), use `EMAILJS_TEMPLATE.html` instead. The simple version (`EMAILJS_TEMPLATE_SIMPLE.html`) is recommended for EmailJS editor.
