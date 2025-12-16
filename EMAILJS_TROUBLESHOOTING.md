# EmailJS Troubleshooting Guide

If emails are not being received, follow these steps to diagnose and fix the issue:

## Step 1: Check Browser Console

1. Open your browser's Developer Tools (F12 or Right-click > Inspect)
2. Go to the **Console** tab
3. Submit the contact form
4. Look for any error messages or warnings

### Common Console Messages:

- **"EmailJS not configured"** → Your `.env` file is missing or incomplete
- **"Invalid template ID"** → Your template ID is incorrect
- **"Invalid service ID"** → Your service ID is incorrect
- **"Invalid public key"** → Your public key is incorrect
- **"Forbidden"** → Your API key doesn't have permission or domain restrictions are blocking it

## Step 2: Verify Environment Variables

1. Check if `.env` file exists in the project root
2. Verify the file contains all three variables:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
   REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
3. Make sure there are **NO spaces** around the `=` sign
4. Make sure there are **NO quotes** around the values
5. **Restart your development server** after creating/modifying `.env`

## Step 3: Verify EmailJS Configuration

### Check Service ID:
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Navigate to **Email Services**
3. Find your service and copy the **Service ID** (starts with `service_`)
4. Compare with your `.env` file

### Check Template ID:
1. Go to **Email Templates** in EmailJS dashboard
2. Find your template and copy the **Template ID** (starts with `template_`)
3. Compare with your `.env` file
4. **Important**: Make sure your template uses these variable names:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_name}}`
   - `{{reply_to}}`

### Check Public Key:
1. Go to **Account** > **General** in EmailJS dashboard
2. Find **API Keys** section
3. Copy your **Public Key**
4. Compare with your `.env` file

## Step 4: Test EmailJS Service

1. In EmailJS dashboard, go to **Email Services**
2. Click on your service
3. Click **Test** button
4. If test fails, your email service is not configured correctly

## Step 5: Check Email Service Status

1. In EmailJS dashboard, go to **Email Services**
2. Make sure your service shows as **Active** (green)
3. If it's inactive, click to activate it

## Step 6: Check Domain Restrictions

1. Go to **Account** > **General** in EmailJS dashboard
2. Scroll to **Domain Restrictions**
3. If restrictions are enabled, make sure your domain is added
4. For local development, you may need to disable restrictions temporarily

## Step 7: Check Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Open your template
3. Verify:
   - **To Email** is set correctly (your email address)
   - **From Name** and **From Email** are configured
   - All template variables match the code (see Step 3)

## Step 8: Check Spam Folder

Sometimes emails end up in spam/junk folder. Check:
- Gmail: Spam folder
- Outlook: Junk Email folder
- Other providers: Check spam/junk folders

## Step 9: Verify EmailJS Quota

1. Go to **Account** > **Billing** in EmailJS dashboard
2. Check if you've exceeded your monthly email limit
3. Free tier: 100 emails/month
4. If exceeded, upgrade your plan or wait for next month

## Step 10: Test with Simple Template

Create a simple test template:
```
Subject: Test Email

Hello,

This is a test email from {{from_name}}.

Email: {{from_email}}

Message: {{message}}
```

## Common Issues and Solutions

### Issue: "EmailJS not configured"
**Solution**: Create `.env` file with all three variables and restart server

### Issue: "Invalid template ID"
**Solution**: 
- Double-check template ID in EmailJS dashboard
- Make sure template ID starts with `template_`
- Copy-paste directly from dashboard (no typos)

### Issue: "Invalid service ID"
**Solution**:
- Double-check service ID in EmailJS dashboard
- Make sure service ID starts with `service_`
- Ensure service is active

### Issue: "Forbidden" or "403 Error"
**Solution**:
- Check domain restrictions in EmailJS account
- Verify API key is correct
- Check if service is active

### Issue: Emails sent but not received
**Solution**:
- Check spam/junk folder
- Verify "To Email" in template is correct
- Check EmailJS logs in dashboard (Email Logs section)
- Verify email service is properly connected

### Issue: Works locally but not in production
**Solution**:
- Make sure environment variables are set in production
- For Vercel/Netlify: Add env vars in project settings
- For other hosts: Set env vars in hosting platform settings
- Rebuild and redeploy after adding env vars

## Debug Mode

The code includes console logging. Check browser console for:
- Configuration status (✓ or ✗ for each variable)
- Email parameters being sent
- Full error details

## Still Not Working?

1. Check EmailJS dashboard **Email Logs** section for detailed error messages
2. Verify all steps above
3. Try creating a new service and template from scratch
4. Contact EmailJS support if issue persists
