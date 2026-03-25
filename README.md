# 📚 Nova Books

A visual, audio-supported reading companion app for teens and young adults who benefit from structured learning.

**Live Demo:** `https://yourusername.github.io/NovaBooks/`

---

## 📖 **Current Books**

1. **Harry Potter and the Sorcerer's Stone** - J.K. Rowling (17 chapters)
2. **Percy Jackson: The Lightning Thief** - Rick Riordan (22 chapters)
3. **Smile** - Raina Telgemeier (12 scenes)
4. **Diary of a Wimpy Kid** - Jeff Kinney (15 diary entries)

---

## ✨ **Features**

- **📚 Multi-Book Library** - Choose from 4 books
- **🎴 Character Guides** - Visual character cards with real photos
- **🧠 Icon System** - Consistent 4-icon framework for comprehension
- **📖 Chapter Summaries** - Bite-sized content per chapter/scene
- **🔊 Audio Support** - Every screen reads aloud
- **📊 Progress Tracking** - See completion across all books
- **📱 Mobile-First** - Optimized for phones and tablets
- **🎯 No Scrolling Required** - Everything fits on screen

---

## 🎯 **Built For**

Teens and young adults (ages 13-21) who:
- Learn more slowly but are capable
- Benefit from visual learning
- Prefer audio support
- Want structured, bite-sized content
- Appreciate modern, respectful design

---

## 🎨 **Design Philosophy**

Nova Books follows the **Brio App Design Philosophy**:

✅ **Visual First** - Images before text  
✅ **Minimal Words** - 1-2 word labels, icons over paragraphs  
✅ **Audio Support** - Every screen can be heard  
✅ **Teen-Friendly** - Modern, not childish  
✅ **No Therapy Language** - Respectful, empowering tone  
✅ **Micro-Lessons** - Small, digestible content  
✅ **Progress Visible** - Always see where you are  

---

## 📁 **Project Structure**

```
NovaBooks/
├── index.html              # Main app with book selection
├── app.js                  # Core app logic
├── books/                  # Book data files
│   ├── harry-potter.js
│   ├── percy-jackson.js
│   ├── smile.js
│   └── wimpy-kid.js
├── images/
│   ├── covers/             # Book cover images
│   │   ├── harry-potter.jpg
│   │   ├── percy-jackson.jpg
│   │   ├── smile.jpg
│   │   └── wimpy-kid.jpg
│   └── characters/         # Character images by book
│       ├── harry-potter/
│       ├── percy-jackson/
│       ├── smile/
│       └── wimpy-kid/
└── README.md
```

---

## 🚀 **Quick Start**

### **Local Testing**

1. Clone the repository
2. Open `index.html` in a browser
3. No build process needed!

### **Deploy to GitHub Pages**

1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch
4. Your app will be live in 2-3 minutes

---

## 🖼️ **Adding Character Images**

Character images are currently set to show purple placeholder boxes until you add them.

**To add images:**

1. Create the folder structure (already done)
2. Add images to the appropriate folders:
   - `images/characters/harry-potter/harry.jpg`
   - `images/characters/percy-jackson/percy.jpg`
   - etc.
3. Commit and push

**Image specs:**
- Size: 120×160px (or any 3:4 ratio)
- Format: JPG or PNG
- File size: Under 100KB each

---

## 🎮 **How It Works**

### **User Flow:**

1. **Select a book** from the library
2. **Choose a section:**
   - Characters - Meet the people
   - Icon Guide - Learn the system
   - Chapters - Read along
3. **Swipe through content** with Previous/Next buttons
4. **Tap 🔊** to hear any screen read aloud
5. **Track progress** as you complete sections
6. **Switch books** anytime

---

## 📚 **Book Structures**

### **Harry Potter / Percy Jackson (Adventure)**
- Icon System: 👤 Who | 📍 Where | ⚡ What happened | ❓ Confusing
- Focus: Plot, mystery, adventure

### **Smile (Personal Story)**
- Icon System: 😬 What happened | 📍 Where | 💭 How she felt | 😊 What helped
- Focus: Emotions, resilience, growth

### **Wimpy Kid (Comedy)**
- Icon System: 🤦 What Greg did | 😱 The problem | 😂 What happened | 💡 What he learned
- Focus: Humor, mistakes, friendship

---

## 🔧 **Adding New Books**

1. Create a new data file in `books/your-book.js`
2. Follow the structure from existing books
3. Add book cover to `images/covers/`
4. Add character images to `images/characters/your-book/`
5. Register the book in `app.js` in the `books` array

---

## 💾 **Data Storage**

- **LocalStorage** tracks progress per book
- **No account required** - works offline
- **Progress persists** across sessions

---

## 🎯 **Technical Details**

- **Pure HTML/CSS/JavaScript** - No frameworks
- **Mobile-first responsive design**
- **Web Speech API** for text-to-speech
- **Dynamic module loading** for book data
- **Works offline** once loaded

---

## 🤝 **Contributing**

This is a personal project, but feedback is welcome!

---

## 📄 **License**

Personal use only. Book content © respective authors and publishers.

---

## 🙏 **Acknowledgments**

- Inspired by Duolingo, Elevate, and Headspace
- Part of the **Brio** educational app suite
- Built for learners who think differently

---

**Made with ❤️ for teens who learn differently**
