# Deployment Guide - Atharva Coaching Classes Website

This guide will help you deploy your website on Vercel in less than 5 minutes.

## Prerequisites

- GitHub account (free)
- Vercel account (free - create at vercel.com)
- Git installed on your computer

## Step-by-Step Deployment Instructions

### Step 1: Prepare Your Code for Git

1. Open PowerShell in your project folder (`atharva-website`)
2. Initialize Git:
   ```powershell
   git init
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

3. Add all files:
   ```powershell
   git add .
   ```

4. Create initial commit:
   ```powershell
   git commit -m "Initial commit: Atharva Coaching Classes website"
   ```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **+** icon → **New repository**
3. Repository name: `atharva-coaching-website`
4. Description: `Professional website for Atharva Coaching Classes`
5. Choose **Public** (so Vercel can access it)
6. Click **Create repository** (Don't add README, license, or .gitignore)

### Step 3: Push Code to GitHub

Copy the commands shown on GitHub (should be similar to):

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/atharva-coaching-website.git
git push -u origin main
```

Paste and run these commands in PowerShell.

### Step 4: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign up** (or login if you have account)
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub account
5. You'll be redirected to Vercel dashboard
6. Click **Add New Project**
7. You'll see your repository in the list: `atharva-coaching-website`
8. Click **Import**

### Step 5: Configure Project

1. Framework Preset: **Next.js** (auto-detected)
2. Root Directory: `.` (leave as is)
3. Environment Variables: (leave empty for now)
4. Click **Deploy**

**That's it!** Your website will be deployed in 1-2 minutes.

### Step 6: Get Your Live URL

After deployment completes:
- Your website URL will be: `https://atharva-coaching-website.vercel.app`
- Custom domain: `https://yourdomain.com` (optional, requires domain purchase)

---

## Common Issues & Fixes

### Issue: Deployment Failed
**Solution:**
1. Check Node.js version: `node --version` (should be 16+)
2. Verify package.json exists
3. Check for console errors in Vercel dashboard
4. Push fixes to GitHub - Vercel will auto-redeploy

### Issue: Website Shows 404
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 2-3 minutes for Vercel to complete build
- Check Vercel dashboard for build logs

### Issue: Images Not Loading
**Solution:**
1. Add images to `public/` folder
2. Use proper image paths in code
3. Commit and push to GitHub

---

## Post-Deployment Tasks

### 1. Custom Domain Setup

1. Buy domain from:
   - GoDaddy
   - Namecheap
   - Domain.com
   - Google Domains

2. In Vercel Dashboard:
   - Go to your project
   - Settings → Domains
   - Add domain name
   - Follow DNS setup instructions

### 2. Update Contact Information

Edit these files and redeploy:

**Footer Contact:**
- File: `components/Footer.tsx`
- Update phone, email, address

**Admission Form:**
- File: `app/admission/page.tsx`
- Update contact details

**Step to redeploy:**
```powershell
git add .
git commit -m "Update contact information"
git push
```

### 3. Add Real Images

1. Create `public/images/` folder
2. Add your images (JPG, PNG)
3. Update gallery and home page
4. Push to GitHub

### 4. Setup Email Service (Optional)

For admission form emails, integrate with:
- **Vercel/Netlify Functions** (serverless backend)
- **Formspree** (form backend as a service)
- **EmailJS** (client-side email)

---

## Monitoring & Analytics

### View Website Analytics

1. Vercel Dashboard → Analytics
2. Monitor:
   - Page views
   - Traffic sources
   - Performance metrics

### Setup Google Analytics (Optional)

1. Create Google Analytics account
2. Add tracking code to `app/layout.tsx`
3. Monitor student inquiries

---

## Making Updates

Whenever you make changes:

```powershell
# Make your code changes
# ...

# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push

# Vercel automatically detects and redeploys!
```

---

## Performance Optimization

Your website is already optimized, but you can further improve:

1. **Compress Images:**
   - Use TinyPNG.com before uploading
   - Keep images under 500KB

2. **Enable Caching:**
   - Vercel handles this automatically

3. **Monitor Speed:**
   - Use PageSpeed Insights: pagespeed.web.dev
   - Target: 90+ score

---

## Security

✅ Already configured:
- HTTPS enabled (automatic with Vercel)
- Environment variables support
- DDoS protection included

---

## Cost

- **Website Hosting:** FREE on Vercel
- **Custom Domain:** ~₹200-500/year
- **Premium Vercel:** Optional ($20+/month for advanced features)

---

## Support

### If Deployment Fails:

1. Check Vercel Build Logs:
   - Dashboard → Your Project → Deployments
   - Click failed deployment
   - View logs for error messages

2. Common Errors:
   - **Module not found:** `npm install` and push again
   - **Build timeout:** Check large files in code
   - **Memory error:** Upgrade Vercel plan (optional)

### Get Help:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Community: Stack Overflow, Reddit r/nextjs

---

## Production Checklist

Before going live:

- [ ] Update all contact information
- [ ] Add real images to gallery
- [ ] Update teacher information
- [ ] Test admission form
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Setup custom domain (optional)
- [ ] Enable Google Analytics (optional)
- [ ] Add favicon (optional)

---

**Your website is now live and ready to accept student inquiries!** 🎉

---

**Last Updated:** 2024
**Support:** info@atharvaclasses.com
