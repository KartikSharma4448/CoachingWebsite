# Windows Setup Instructions

Complete setup guide for Windows users to get the Atharva Coaching Classes website running locally.

## ✅ Prerequisites Check

### 1. Check if Node.js is Installed

Open PowerShell and run:
```powershell
node --version
npm --version
```

**Expected output:** Should show version numbers (e.g., v18.0.0, v9.0.0)

### 2. If Node.js Not Installed

Download and install from: https://nodejs.org/
- Choose **LTS (Long Term Support)** version
- Run the installer
- Restart your computer after installation

---

## 🚀 Step 1: Open Project Folder

1. Open File Explorer
2. Navigate to: `e:\Atharva Coaching Classes VSCODE\atharva-website`
3. Right-click → **Open PowerShell here**

Alternative:
- Open PowerShell (Windows + X, then A)
- Run: `cd "e:\Atharva Coaching Classes VSCODE\atharva-website"`

---

## 📦 Step 2: Install Dependencies

In PowerShell, run:
```powershell
npm install
```

**What it does:**
- Downloads all required packages
- Creates `node_modules` folder
- This takes 2-3 minutes first time

---

## ▶️ Step 3: Start Development Server

```powershell
npm run dev
```

**Output will show:**
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local
```

---

## 🌐 Step 4: Open in Browser

1. Open your browser (Chrome, Firefox, Edge, etc.)
2. Go to: `http://localhost:3000`
3. You should see your website! 🎉

---

## 📝 Step 5: Customize (Optional)

### Edit Home Page Content

1. In VS Code, open: `app/page.tsx`
2. Find the section you want to edit
3. Make changes (auto-refresh in browser)
4. Save file

### Update Contact Information

1. Edit: `components/Footer.tsx`
2. Find: Phone, Email, Address
3. Update with real details
4. Save

### Add Images

1. Create folder: `public/images`
2. Add your images (JPG, PNG)
3. Update references in code

---

## 🛑 Common Commands

| Command | What it does |
|---------|-----------|
| `npm run dev` | Start development server (live reload) |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code for errors |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl + C | Stop development server |
| F12 | Open browser DevTools |
| Ctrl + Shift + Delete | Clear browser cache |
| Ctrl + R | Hard refresh browser |

---

## 🔧 If Something Goes Wrong

### Error: "command not found: npm"
**Solution:**
- Restart PowerShell
- Or restart your computer
- Then try again

### Error: "ENOENT: no such file or directory"
**Solution:**
- Make sure you're in correct folder: `atharva-website`
- Run: `ls` to verify files are there
- Try: `npm install` again

### Port 3000 Already in Use
**Solution:**
Run on different port:
```powershell
npm run dev -- -p 3001
```
Then visit: `http://localhost:3001`

### Website Shows Blank Page
**Solution:**
1. Clear browser cache (Ctrl + Shift + Delete)
2. Hard refresh (Ctrl + Shift + R)
3. Check PowerShell for errors
4. Restart: `npm run dev`

### Images Not Showing
**Solution:**
1. Add images to `public/` folder
2. Check image file names in code
3. Save and refresh browser

---

## 📁 File Organization

Your project folder structure:
```
atharva-website/
├── node_modules/          ⚠️ Don't edit (auto-generated)
├── app/                   ✏️ Edit page files here
├── components/            ✏️ Reusable components
├── public/                ✏️ Add images here
├── package.json           ⚠️ Don't edit (dependencies)
├── tailwind.config.js     ⚙️ Edit for styling
├── next.config.js         ⚙️ Edit for Next.js config
└── README.md              📖 Documentation
```

---

## 🎨 Where to Make Changes

### Change Website Colors
File: `tailwind.config.js`
```javascript
colors: {
  primary: '#6366F1',    // Change this (purple)
  secondary: '#F97316',  // Change this (orange)
}
```

### Change Home Page Text
File: `app/page.tsx`
- Look for text you want to change
- Edit between quotes
- Save file

### Change Teacher Info
File: `app/teachers/page.tsx`
- Find `teachers` array
- Edit teacher names, subjects, details
- Save file

### Change Footer Contact
File: `components/Footer.tsx`
- Find phone, email, address
- Update with real contact info
- Save file

---

## 🚀 Next: Deploy to Vercel

Once you're happy with your website locally:

1. Read: `DEPLOYMENT_GUIDE.md`
2. Follow the steps to:
   - Push to GitHub
   - Deploy on Vercel (FREE!)
   - Get your live website

---

## 💡 Tips for Windows Users

### Speed Up Development
- Close unnecessary programs
- Close other browser tabs
- Use Chrome or Edge for best performance

### File Editing
- Use VS Code (free code editor)
- Install Extensions: ES7+ React/Redux snippets
- Format on save: Settings → Format On Save

### Terminal Tips
- Right-click project folder → Open PowerShell here
- Use `cls` to clear terminal
- Use Up Arrow to repeat previous command
- Use Tab to auto-complete folder names

---

## 📚 Useful Resources

- **Node.js Download:** https://nodejs.org/
- **VS Code Download:** https://code.visualstudio.com/
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/
- **Vercel Docs:** https://vercel.com/docs

---

## ✅ You're Ready!

- [x] Node.js installed
- [x] Project downloaded
- [x] Dependencies installed
- [x] Development server running
- [x] Website in browser

**Next Step:** Follow DEPLOYMENT_GUIDE.md to go live! 🎉

---

## 🆘 Get Help

If stuck:
1. Check error message carefully
2. Google the error
3. Check file paths are correct
4. Make sure you're in correct folder
5. Restart PowerShell and try again

---

**Created for Windows Users**
**Last Updated:** 2024
