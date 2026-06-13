# QUICK START GUIDE

## 🚀 Get Your Website Running in 2 Minutes

### Step 1: Install Dependencies
Open PowerShell in `atharva-website` folder:
```powershell
npm install
```

### Step 2: Run Development Server
```powershell
npm run dev
```

### Step 3: Open in Browser
Go to: http://localhost:3000

**That's it!** Your website is running! 🎉

---

## 📋 What You Get

✅ **4 Professional Pages:**
- Home (with features, stats, testimonials)
- Teachers (faculty showcase)
- Gallery (photo gallery with filters)
- Admission (inquiry form)

✅ **Professional Design:**
- Purple & Orange theme
- Fully responsive
- Modern animations
- No emojis, only professional icons

✅ **Ready for Deployment:**
- Next.js optimized
- Vercel-ready
- Production-grade code

---

## 🎨 Customization (Easy!)

### Update Contact Info
File: `components/Footer.tsx` → Edit phone, email, address

### Change Logo/Colors
File: `tailwind.config.js` → Modify color codes

### Add Images
Folder: `public/` → Add images, update page files

### Edit Content
- Home page: `app/page.tsx`
- Teachers: `app/teachers/page.tsx`
- Gallery: `app/gallery/page.tsx`
- Admission: `app/admission/page.tsx`

---

## 🌐 Deploy to Vercel (Free!)

See: DEPLOYMENT_GUIDE.md for step-by-step instructions

---

## 📁 File Structure

```
atharva-website/
├── app/
│   ├── page.tsx          → Home page
│   ├── layout.tsx        → Layout with navbar/footer
│   ├── teachers/
│   ├── gallery/
│   ├── admission/
│   └── globals.css       → Styles
├── components/
│   ├── Navbar.tsx        → Navigation
│   └── Footer.tsx        → Footer
├── public/               → Images & static files
└── package.json          → Dependencies
```

---

## 💡 Tips

1. **Live Reload:** Changes auto-refresh in browser
2. **Mobile Preview:** Open DevTools (F12) → Click phone icon
3. **Build for Production:** `npm run build`
4. **Preview Production:** `npm run build` → `npm start`

---

## 🎯 Next Steps

1. **Run Development Server** (`npm run dev`)
2. **Customize Content** (Edit pages)
3. **Add Images** (Put in `public/` folder)
4. **Deploy on Vercel** (See DEPLOYMENT_GUIDE.md)

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```powershell
npm run dev -- -p 3001
```

**Module errors?**
```powershell
rm -r node_modules package-lock.json
npm install
```

**Slow build?**
- Wait first time is slower
- Subsequent builds are faster
- Check your internet connection

---

## ✨ Your Website is Professional-Ready!

No coding experience needed. Just customize the content and deploy!

Questions? Check README.md or DEPLOYMENT_GUIDE.md

---

Happy coding! 🚀
