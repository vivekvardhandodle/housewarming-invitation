# 🚀 Quick Start Guide

Get your house warming invitation live in minutes!

## ⚡ Fastest Way to Get Started

### 1. Install Dependencies (30 seconds)

```bash
npm install
```

### 2. Start Development Server (10 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your invitation! 🎉

### 3. Build for Production (1 minute)

```bash
npm run build
```

This creates an `out/` folder with all static files ready to deploy.

---

## 🌐 Deploy in 5 Minutes

### Option 1: Vercel (Recommended - Easiest)

```bash
npm install -g vercel
vercel
```

Follow prompts, and you're live!

### Option 2: Netlify Drag & Drop

1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `out/` folder
4. Done! Get your URL instantly

### Option 3: GitHub Pages

```bash
# Add deploy script to package.json first
npm install --save-dev gh-pages

# Then deploy
npm run deploy
```

---

## 🎨 Customize Your Invitation

### Change Event Details

Edit `components/EventDetails.tsx`:

```typescript
const details = [
  {
    icon: Calendar,
    label: 'Date',
    value: 'October 24, 2025',  // ← Change this
    subValue: 'Friday',
  },
  // ... more details
]
```

### Update Map Link

In `components/EventDetails.tsx`, find:

```typescript
href="https://maps.app.goo.gl/VBebLHmHrfC4gs3n9?g_st=aw"  // ← Change this
```

### Modify Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'saffron': '#FF9933',     // ← Your color
  'indian-orange': '#FF6B35', // ← Your color
  // ... add more
}
```

---

## 📱 Make RSVP Work

By default, RSVP data logs to console. To save responses:

### Using Formspree (Free & Easy)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get your endpoint
3. Edit `components/RSVPForm.tsx`:

```typescript
const onFormSubmit = async (data: RSVPData) => {
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  onSubmit(data)
}
```

Done! RSVPs will come to your email.

---

## 🎬 Create a GIF

### Quick Method

1. Open your invitation: `npm run dev`
2. Use Loom or CloudApp to record
3. Convert at [ezgif.com/video-to-gif](https://ezgif.com/video-to-gif)

### Mac Quick Record

```bash
# Install Kap
brew install kap

# Open Kap, record, export as GIF
```

---

## 🐛 Common Issues

### "Module not found" error

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails

```bash
rm -rf .next
npm run build
```

### Port 3000 already in use

```bash
npm run dev -- -p 3001
```

---

## 📦 Project Structure

```
Invite/
├── app/
│   ├── page.tsx          # Main invitation page
│   └── globals.css       # Styles
├── components/           # All UI components
├── out/                  # Build output (after npm run build)
├── package.json
└── README.md
```

---

## 🎯 What's Included

✅ Animated Diyas (oil lamps) with glowing effects  
✅ Rotating Rangoli pattern  
✅ Floating flowers and sparkles  
✅ RSVP form with validation  
✅ Google Maps integration  
✅ Fully responsive design  
✅ Traditional Indian elements  
✅ Production-ready build  

---

## 💡 Pro Tips

1. **Test on Mobile**: Open on your phone to see responsive design
2. **Share Link**: After deploying, share the URL via WhatsApp/Email
3. **QR Code**: Generate QR code at [qr-code-generator.com](https://www.qr-code-generator.com)
4. **Custom Domain**: Add your own domain in hosting platform settings
5. **Analytics**: Add Google Analytics to track RSVPs

---

## 🎊 You're All Set!

Your beautiful house warming invitation is ready to share!

**Next Steps:**
1. ✅ Run `npm run dev` to preview
2. ✅ Customize event details
3. ✅ Build with `npm run build`
4. ✅ Deploy to Vercel/Netlify
5. ✅ Share with family & friends!

---

**Need more help?** Check:
- [README.md](./README.md) - Full documentation
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Detailed deployment steps

**शुभं भवतु** (May all be auspicious) 🪔

