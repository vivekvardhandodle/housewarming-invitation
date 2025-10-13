# 🚀 Detailed Deployment Guide

This guide provides step-by-step instructions for deploying your house warming invitation to various platforms.

## Table of Contents

1. [GitHub Pages Deployment](#github-pages-deployment)
2. [AWS S3 + CloudFront Deployment](#aws-s3--cloudfront-deployment)
3. [Vercel Deployment](#vercel-deployment)
4. [Netlify Deployment](#netlify-deployment)
5. [Custom Domain Setup](#custom-domain-setup)

---

## GitHub Pages Deployment

### Step 1: Prepare Your Repository

1. Create a new repository on GitHub (e.g., `housewarming-invite`)
2. Make sure your code is ready:

```bash
# Build the project
npm run build

# Verify the out/ folder was created
ls out/
```

### Step 2: Update next.config.js

If deploying to a repository (not user/org page), update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/YOUR_REPO_NAME',  // Add this line
  trailingSlash: true,
}
```

### Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: House warming invitation"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy script to package.json
# Add this to scripts section:
# "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"

# Deploy
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "gh-pages" branch
4. Click "Save"
5. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## AWS S3 + CloudFront Deployment

### Prerequisites

- AWS Account
- AWS CLI installed and configured

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Create S3 Bucket

```bash
# Create bucket (replace with your bucket name)
aws s3 mb s3://housewarming-invite

# Enable static website hosting
aws s3 website s3://housewarming-invite \
  --index-document index.html \
  --error-document 404.html
```

### Step 3: Configure Bucket Policy

Create a file `bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::housewarming-invite/*"
    }
  ]
}
```

Apply the policy:

```bash
aws s3api put-bucket-policy \
  --bucket housewarming-invite \
  --policy file://bucket-policy.json
```

### Step 4: Upload Files

```bash
# Upload all files
aws s3 sync out/ s3://housewarming-invite \
  --acl public-read \
  --cache-control "public, max-age=31536000, immutable"

# Update index.html with shorter cache
aws s3 cp out/index.html s3://housewarming-invite/index.html \
  --acl public-read \
  --cache-control "public, max-age=0, must-revalidate"
```

### Step 5: Set Up CloudFront (Optional but Recommended)

1. Go to AWS CloudFront Console
2. Click "Create Distribution"
3. Set Origin Domain to your S3 bucket URL
4. Set "Default Root Object" to `index.html`
5. Create distribution
6. Wait for deployment (10-15 minutes)
7. Access via CloudFront URL

### Step 6: Custom Domain (Optional)

1. In CloudFront, add your domain to "Alternate Domain Names (CNAMEs)"
2. Request SSL certificate in AWS Certificate Manager
3. Update Route 53 or your DNS provider with CloudFront distribution URL

**Your site is now live on AWS!**

---

## Vercel Deployment

Vercel is the easiest and fastest option!

### Method 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy: Y
# - Scope: Your account
# - Link to existing project: N
# - Project name: housewarming-invite
# - Directory: ./
# - Override settings: N

# Deploy to production
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

**Your site is live in ~30 seconds!**

### Method 3: Using Git Integration

```bash
# Push to GitHub
git push origin main

# Connect repository in Vercel dashboard
# Every push to main will auto-deploy
```

---

## Netlify Deployment

### Method 1: Drag and Drop

1. Build your project:

```bash
npm run build
```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `out/` folder to the page
4. Your site is live instantly!

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod --dir=out
```

### Method 3: Git Integration

1. Push code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

**Auto-deploys on every push!**

---

## Custom Domain Setup

### For GitHub Pages

1. Add a `CNAME` file in `/public` folder with your domain:

```
yourdomain.com
```

2. In your DNS provider, add:
   - Type: CNAME
   - Name: www
   - Value: YOUR_USERNAME.github.io
   - TTL: 3600

3. In GitHub Settings → Pages, add your custom domain

### For Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. Vercel handles SSL automatically

### For Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS instructions
4. SSL is automatic

### For AWS S3 + CloudFront

1. In CloudFront, add domain to "Alternate Domain Names"
2. Request SSL certificate in ACM
3. In Route 53 or your DNS:
   - Type: A (Alias)
   - Name: yourdomain.com
   - Value: CloudFront distribution domain

---

## 🎬 Creating Shareable GIF

### Option 1: Screen Recording + Conversion

1. Record your screen:
   - **Mac**: Cmd + Shift + 5 (built-in)
   - **Windows**: Windows + G (Game Bar)
   - **Linux**: Kazam or SimpleScreenRecorder

2. Convert to GIF using [ezgif.com](https://ezgif.com/video-to-gif):
   - Upload your video
   - Adjust size (recommended: 800px width)
   - Set frame rate (10-15 fps)
   - Download GIF

### Option 2: Using FFmpeg

```bash
# Install FFmpeg
brew install ffmpeg  # macOS
# or download from ffmpeg.org

# Convert video to GIF
ffmpeg -i recording.mov \
  -vf "fps=10,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  -loop 0 invitation.gif

# Optimize GIF size
ffmpeg -i invitation.gif \
  -vf "scale=600:-1" \
  optimized-invitation.gif
```

### Option 3: Using Kap (Mac Only)

1. Install Kap: `brew install kap`
2. Open Kap and select recording area
3. Record your invitation
4. Export as GIF
5. Done!

---

## 📊 Analytics Integration (Optional)

### Google Analytics

Add to `/app/layout.tsx`:

```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## 🔒 Security Considerations

1. **Rate Limiting**: If using RSVP API, implement rate limiting
2. **CORS**: Configure CORS properly if using external APIs
3. **Environment Variables**: Never commit API keys
4. **CSP Headers**: Set Content Security Policy headers

---

## 🐛 Troubleshooting

### GitHub Pages shows 404

- Check if `out/` folder was created
- Verify GitHub Pages is enabled in settings
- Check if basePath in next.config.js matches repo name

### Animations not working

- Clear browser cache
- Check browser console for errors
- Ensure Framer Motion is installed: `npm list framer-motion`

### Build fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Custom domain not working

- Wait 24-48 hours for DNS propagation
- Verify DNS records with: `dig yourdomain.com`
- Check HTTPS/SSL certificate status

---

## 📞 Support

For issues or questions:
1. Check the main README.md
2. Review error messages in browser console
3. Check build logs
4. Search for similar issues on Stack Overflow

---

**May your deployment be as auspicious as the occasion! 🪔**

**शुभं भवतु**

