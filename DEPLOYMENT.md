# 🚀 NovaBooks Deployment Guide

Follow these steps to deploy NovaBooks to GitHub Pages.

---

## 📋 **Step 1: Create GitHub Repository**

1. Go to **https://github.com/new**
2. Repository name: `NovaBooks` (or `NovaBooksForYou`)
3. Description: `Visual reading companion for teens`
4. Set to **Public**
5. **Do NOT** initialize with README (we have our own)
6. Click **"Create repository"**

---

## 📁 **Step 2: Prepare Your Files**

You should have this folder structure:

```
NovaBooks/
├── index.html
├── app.js
├── README.md
├── .gitignore
├── books/
│   ├── harry-potter.js
│   ├── percy-jackson.js
│   ├── smile.js
│   └── wimpy-kid.js
└── images/
    ├── covers/
    │   └── (add book cover images here)
    └── characters/
        ├── harry-potter/
        ├── percy-jackson/
        ├── smile/
        └── wimpy-kid/
```

---

## 💻 **Step 3: Push to GitHub**

### **Using Git Bash (Windows) or Terminal (Mac/Linux)**

```bash
# Navigate to your NovaBooks folder
cd /path/to/NovaBooks

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - NovaBooks with 4 books"

# Connect to GitHub (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/NovaBooks.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🌐 **Step 4: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

**Your app will be live at:**
```
https://YOUR_USERNAME.github.io/NovaBooks/
```

⏰ **Wait 2-3 minutes** for GitHub to build and deploy.

---

## ✅ **Step 5: Test Your App**

1. Visit your live URL
2. **Test book selection:**
   - Tap each of the 4 books
   - Verify they load correctly
3. **Test navigation:**
   - Characters section
   - Icon Guide
   - Chapters
4. **Test audio 🔊:**
   - Tap audio buttons on different screens
   - Verify text-to-speech works
5. **Test on mobile:**
   - Open on your phone
   - Verify no scrolling needed
   - Test swiping between characters/chapters

---

## 🖼️ **Step 6: Add Character Images (Optional)**

The app works with placeholder boxes, but here's how to add real images:

### **Find Images**

**Harry Potter & Percy Jackson:**
- Google Images: "[character name] movie poster"
- Official movie promotional images
- Save as JPG, 120×160px recommended

**Smile & Wimpy Kid:**
- Official book illustrations
- Publisher promotional materials
- Raina Telgemeier's website for Smile
- Jeff Kinney's website for Wimpy Kid

### **Add to Repository**

```bash
# After adding images to folders, commit them
git add images/
git commit -m "Add character images"
git push
```

The site updates automatically in 1-2 minutes!

---

## 🔧 **Troubleshooting**

### **Problem: Books don't load**

**Solution:**
- Check browser console (F12) for errors
- Verify all book files are in `books/` folder
- Make sure file names match exactly

### **Problem: 404 Error**

**Solution:**
- Wait 2-3 minutes - GitHub Pages takes time
- Check Settings → Pages is enabled
- Verify `index.html` is in root folder

### **Problem: Images don't show**

**Solution:**
- This is expected! Purple placeholders show until you add images
- Verify image paths match exactly
- Check file names (case-sensitive)

### **Problem: Audio doesn't work**

**Solution:**
- Works best in Chrome/Safari
- Check device volume
- Some browsers need user interaction first

---

## 🔄 **Making Changes**

After initial deployment:

```bash
# Make your changes

# Add and commit
git add .
git commit -m "Description of changes"

# Push
git push
```

Site updates automatically in 1-2 minutes!

---

## 📱 **Mobile Testing**

### **Add to Home Screen (iPhone/iPad)**

1. Open the site in Safari
2. Tap Share button
3. Select "Add to Home Screen"
4. App appears like a native app!

### **Add to Home Screen (Android)**

1. Open in Chrome
2. Tap menu (three dots)
3. Select "Add to Home Screen"

---

## 🎯 **Next Steps**

1. ✅ Deploy basic app (works with placeholders)
2. 🖼️ Add character images gradually
3. 👥 Share with Tina to test
4. 📊 Watch usage patterns
5. 📚 Add more books based on feedback

---

## 💡 **Pro Tips**

- **Start simple:** Deploy now, add images later
- **Test on real devices:** Not just desktop
- **Get feedback early:** Let Tina use it ASAP
- **Track what works:** See which books get completed
- **Iterate:** Add features based on real usage

---

## 🆘 **Need Help?**

- **Git Issues:** https://docs.github.com/en/get-started
- **GitHub Pages:** https://docs.github.com/en/pages
- **Browser Errors:** Press F12 to see console

---

## ✨ **You're All Set!**

Your NovaBooks app is ready to help readers follow along with their favorite books!

🎉 **Congratulations on building something meaningful!** 🎉
