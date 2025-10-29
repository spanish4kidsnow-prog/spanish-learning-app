# Spanish Learning Adventure

An interactive web app for elementary school students (grades 2-4) to practice Spanish vocabulary through fun games and activities.

## Features

### For Students:
- **Flashcards**: Interactive vocabulary cards with 5 default categories (Colors, Numbers, Animals, Family, Greetings)
- **Matching Game**: Match Spanish words with English translations
- **Quiz Time**: Multiple choice quizzes with instant feedback
- **Memory Game**: Classic concentration game with Spanish-English word pairs

### For Teachers:
- **Admin Panel**: Password-protected content management system
- **Add Vocabulary**: Easily add new Spanish words with translations and emojis
- **Manage Words**: View and delete existing vocabulary
- **Custom Categories**: Create new categories (e.g., Food, Classroom, Verbs)
- **Import/Export**: Backup and restore vocabulary data

## Deployment on Vercel

### Prerequisites
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free tier works perfectly)
- Git installed on your computer

### Step 1: Push to GitHub

1. Initialize git in your project folder:
```bash
cd /path/to/Spanishgame
git init
```

2. Create a `.gitignore` file:
```bash
echo "node_modules/
.DS_Store
.env
.vercel" > .gitignore
```

3. Commit your files:
```bash
git add .
git commit -m "Initial commit - Spanish learning app"
```

4. Create a new repository on GitHub (don't initialize with README)

5. Push your code:
```bash
git remote add origin https://github.com/YOUR-USERNAME/spanish-learning-app.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Website (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the settings
5. Click "Deploy"
6. Your app will be live in ~30 seconds!

#### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your app will be deployed!

### Step 3: Access Your App

After deployment, Vercel will provide you with a URL like:
```
https://spanish-learning-app.vercel.app
```

Share this URL with your students!

## Admin Access

- **Password**: The default admin password is `spanish123`
- **To change**: Edit line 2 in `public/script.js` and redeploy
- Click the "Admin" button in the top right corner to access the content management system

## Local Development

To test the app locally:

1. Open `public/index.html` in your web browser
2. The app will work with localStorage (changes saved only on your computer)

## Data Storage

- **Local Testing**: Data is stored in browser's localStorage
- **Deployed on Vercel**: Data syncs between localStorage and server
- **Note**: The current setup uses temporary storage on Vercel. For persistent storage across deployments, consider upgrading to use Vercel KV, MongoDB, or another database solution.

## Adding Persistent Database (Optional)

For production use with multiple teachers/schools, consider adding a database:

### Using Vercel KV (Recommended)

1. Go to your Vercel project dashboard
2. Go to Storage → Create Database → KV
3. Update `api/vocabulary.js` to use Vercel KV instead of filesystem
4. Redeploy

### Using MongoDB Atlas (Free tier available)

1. Create a free MongoDB Atlas cluster
2. Get your connection string
3. Add to Vercel environment variables
4. Update API to use MongoDB
5. Redeploy

## Customization

### Change Admin Password
Edit `public/script.js` line 2:
```javascript
const ADMIN_PASSWORD = 'your-new-password-here';
```

### Add More Default Vocabulary
Edit the `defaultVocabulary` object in `public/script.js` (lines 5-66)

### Change Color Scheme
Edit `public/styles.css` to customize colors and styling

## Troubleshooting

### App not loading after deployment
- Check Vercel deployment logs
- Ensure all files are in the correct folders (public/ and api/)

### Admin panel not saving
- Check browser console for errors
- Verify the API endpoint is working at `/api/vocabulary`

### Changes not appearing for students
- Clear browser cache
- Use incognito/private browsing mode to test

## Support

For issues or questions:
1. Check the Vercel deployment logs
2. Open browser developer console (F12) to check for errors
3. Verify API is responding at `your-domain.vercel.app/api/vocabulary`

## License

MIT License - Feel free to use and modify for your classroom!

## Future Enhancements

Potential features to add:
- Student progress tracking
- Audio pronunciation
- Sentence building exercises
- Printable worksheets
- Multiple teacher accounts
- Student login system
