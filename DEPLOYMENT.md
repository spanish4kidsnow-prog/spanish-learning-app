# Quick Deployment Guide

## Deploy to Vercel in 5 Minutes

### Step 1: Install Git (if not already installed)
- **Mac**: Open Terminal and run `git --version` (it will prompt to install if needed)
- **Windows**: Download from [git-scm.com](https://git-scm.com)

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in (create account if needed)
2. Click the "+" icon → "New repository"
3. Name it: `spanish-learning-app`
4. Make it Public or Private (your choice)
5. Do NOT initialize with README
6. Click "Create repository"

### Step 3: Upload Your Code to GitHub

Open Terminal/Command Prompt in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/spanish-learning-app.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

### Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and use your GitHub account
3. Click "Add New..." → "Project"
4. Select your `spanish-learning-app` repository
5. Click "Deploy" (no configuration needed!)
6. Wait 30 seconds... Done!

### Step 5: Get Your URL

Vercel will give you a URL like:
```
https://spanish-learning-app-abc123.vercel.app
```

This is your live web app! Share it with students.

## Custom Domain (Optional)

Want a nicer URL like `spanish.yourschool.com`?

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS setup instructions

## Making Updates

After making changes to your app:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically redeploy your app!

## Admin Password

Remember to change the default password before sharing:
1. Edit `public/script.js` line 2
2. Change `'spanish123'` to your password
3. Push to GitHub (it will auto-deploy)

## Need Help?

- Vercel has great docs: [vercel.com/docs](https://vercel.com/docs)
- GitHub guides: [docs.github.com](https://docs.github.com)
- Check your browser's console (F12) for errors

## Cost

Vercel's free tier includes:
- Unlimited deployments
- 100GB bandwidth per month
- Automatic HTTPS
- Perfect for classroom use!

---

**You're all set!** Students can now access your Spanish learning app from anywhere with an internet connection.
