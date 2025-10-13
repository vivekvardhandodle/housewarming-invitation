# 🚀 GitHub & Hosting Instructions

## 📋 Quick Summary
Your invitation is ready to push to GitHub and host online!

---

## 🎯 OPTION 1: GitHub + Vercel (RECOMMENDED - Easiest)

### Step 1: Create GitHub Repository

1. Go to: **https://github.com/new**
2. Fill in:
   - **Repository name:** `housewarming-invitation` (or any name you like)
   - **Description:** "Telugu house warming ceremony invitation with 70+ animations"
   - **Visibility:** Public (recommended) or Private
   - **DO NOT** initialize with README, .gitignore, or license
3. Click **"Create repository"**

### Step 2: Push to GitHub

Copy and run these commands in your terminal:

```bash
cd /Users/dvv/Documents/Cursor/Invite

# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/housewarming-invitation.git

git branch -M main

git push -u origin main
```

**Example:** If your username is `john`, it would be:
```bash
git remote add origin https://github.com/john/housewarming-invitation.git
```

### Step 3: Deploy to Vercel (FREE)

1. Go to: **https://vercel.com**
2. Click **"Sign Up"** or **"Log In"** (use your GitHub account)
3. Click **"Add New Project"**
4. Select **"Import Git Repository"**
5. Choose your **`housewarming-invitation`** repository
6. Click **"Deploy"**
7. Wait ~2 minutes
8. **Done!** You'll get a URL like: `https://housewarming-invitation.vercel.app`

✅ **Benefits:**
- Free hosting
- Automatic HTTPS
- Global CDN
- Auto-deploy on every push
- Custom domain support

---

## 🎯 OPTION 2: GitHub Pages

### Step 1 & 2: Same as Option 1 (Create repo and push)

### Step 3: Deploy to GitHub Pages

```bash
cd /Users/dvv/Documents/Cursor/Invite

# Install gh-pages package
npm install --save-dev gh-pages

# Deploy
npm run deploy:gh
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **"Source"**, select **"gh-pages"** branch
4. Click **"Save"**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/housewarming-invitation/`

**Note:** If deploying to GitHub Pages, update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/housewarming-invitation',  // Add this line
  trailingSlash: true,
}
```

---

## 🎯 OPTION 3: Netlify

### Step 1 & 2: Same as Option 1 (Create repo and push)

### Step 3: Deploy to Netlify

1. Go to: **https://app.netlify.com**
2. Sign up/login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub**
5. Select your **`housewarming-invitation`** repository
6. Build settings (should auto-detect):
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
7. Click **"Deploy site"**
8. Get URL like: `https://housewarming-invitation.netlify.app`

---

## 🆕 If You Don't Have a GitHub Account Yet

### Create GitHub Account:
1. Go to: **https://github.com/signup**
2. Enter your email
3. Create password
4. Choose username
5. Verify email
6. Done!

Then follow Option 1 above.

---

## 📱 After Deployment

### Share Your Invitation:

1. **Copy your live URL**
   - Vercel: `https://your-invite.vercel.app`
   - GitHub Pages: `https://username.github.io/repo-name`
   - Netlify: `https://your-invite.netlify.app`

2. **Share it:**
   - WhatsApp: Send link directly
   - Instagram: Put in bio or DM
   - Email: Include in message
   - QR Code: Generate at qr-code-generator.com

3. **Test it:**
   - Open on mobile
   - Share with one person first
   - Make sure RSVP works
   - Check all animations

---

## 🔄 Updating Your Invitation

After making changes:

```bash
cd /Users/dvv/Documents/Cursor/Invite

# Stage changes
git add .

# Commit changes
git commit -m "Updated event details"

# Push to GitHub
git push

# If using Vercel/Netlify: Automatically re-deploys!
# If using GitHub Pages: Run npm run deploy:gh
```

---

## 🎨 Custom Domain (Optional)

### If you want your own domain (e.g., ourhouserwarming.com):

1. Buy domain from:
   - Namecheap.com
   - GoDaddy.com
   - Google Domains

2. In Vercel/Netlify:
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS instructions

3. Usually takes 24-48 hours to propagate

---

## 🔐 Make Repository Private (Optional)

If you don't want code to be public:

1. Go to repository on GitHub
2. Click **Settings**
3. Scroll to **"Danger Zone"**
4. Click **"Change visibility"**
5. Select **"Private"**

**Note:** GitHub Pages requires public repo on free plan.

---

## 📊 View Analytics (Optional)

### Add Google Analytics:

1. Create account at: analytics.google.com
2. Get tracking ID
3. Add to `app/layout.tsx`:

```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
  `}
</Script>
```

4. Track visitors, RSVPs, and more!

---

## ✅ Verification Checklist

Before sharing widely:

- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] Site deployed and live
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] All animations working
- [ ] RSVP form works
- [ ] Telugu text displays correctly
- [ ] Google Maps link works
- [ ] Shared with one test person

---

## 🎯 Quick Commands Reference

```bash
# Check git status
git status

# See what's changed
git diff

# View commit history
git log --oneline

# Push changes
git add .
git commit -m "Your message"
git push

# Deploy to GitHub Pages
npm run deploy:gh

# Build locally
npm run build

# Test locally
npm run dev
```

---

## 🆘 Troubleshooting

### "Permission denied" when pushing:
```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/USERNAME/REPO.git
```

### "Updates were rejected":
```bash
# Pull first, then push
git pull origin main
git push
```

### Build fails on Vercel/Netlify:
- Check build logs
- Make sure all dependencies in package.json
- Try building locally first: `npm run build`

---

## 📞 Need Help?

Common issues:
1. **Can't find repository:** Check GitHub username spelling
2. **Push fails:** Make sure you're logged into GitHub
3. **Site doesn't load:** Wait 2-3 minutes after deploy
4. **Animations slow:** Normal on first load, caches after

---

## 🎉 YOU'RE ALMOST DONE!

Just follow Option 1 above:
1. Create GitHub repo (2 min)
2. Push code (1 min)
3. Deploy to Vercel (2 min)

**Total time: 5 minutes!**

Your invitation will be live with a shareable URL! 🎊

---

**Ready to deploy? Follow Option 1 now! 🚀**

