# 🚀 HARSHAAA Portfolio

A modern, keyboard-inspired portfolio website showcasing design, engineering, sports, and personal passions.

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling
├── js/
│   └── main.js            # JavaScript functionality
├── images/
│   ├── design/            # Design project images
│   ├── projects/          # Software project screenshots
│   ├── sports/            # Sports action photos
│   ├── vehicles/          # Car & bike photos
│   └── trips/             # Travel/trip photos
├── assets/
│   └── resume.pdf         # Your resume (PDF)
└── README.md              # This file
```

## 🎨 Features

- ✅ **Keyboard-Style Navigation** - Mechanical keyboard button design
- ✅ **Dark Theme** - Modern, minimal aesthetic
- ✅ **Smooth Animations** - Scroll-triggered fade-ins
- ✅ **Responsive Design** - Works on all devices
- ✅ **Left-Aligned Layout** - Storytelling approach
- ✅ **Contact Form** - Ready for integration
- ✅ **No Build Process** - Pure HTML/CSS/JS

## 📝 Customization Guide

### 1. **Update Content**

All content is marked with `<!-- CHANGE THIS: -->` comments in `index.html`. Search for these and replace with your own content.

**Key sections to update:**
- Hero introduction
- Project descriptions
- Sports experiences
- Vehicle stories
- Personal timeline
- Contact information

### 2. **Add Your Images**

Replace placeholder images in the `images/` folder:

```
images/
├── design/
│   ├── project1.jpg       # Your design work
│   ├── project2.jpg
│   ├── project3.jpg
│   └── project4.jpg
├── projects/
│   ├── mood.jpg           # Software project screenshots
│   ├── echome.jpg
│   └── smartmeet.jpg
├── sports/
│   ├── action1.jpg        # Sports photos
│   ├── action2.jpg
│   └── action3.jpg
├── vehicles/
│   ├── car1.jpg           # Your vehicles
│   └── bike1.jpg
└── trips/
    ├── trip1.jpg          # Travel photos
    ├── trip2.jpg
    └── trip3.jpg
```

### 3. **Customize Colors**

Edit color variables in `css/styles.css`:

```css
:root {
    --bg-dark: #0a0a0a;           /* Main background */
    --bg-darker: #050505;         /* Darker sections */
    --text-primary: #ffffff;      /* Primary text */
    --text-secondary: #a3a3a3;    /* Secondary text */
    --accent: #3b82f6;            /* Accent color */
}
```

Keyboard button colors are inline in HTML for easy customization per button.

### 4. **Update Social Links**

In `index.html`, find the contact section and update:

```html
<!-- CHANGE THESE URLs -->
<a href="mailto:your.email@example.com">email</a>
<a href="https://linkedin.com/in/yourprofile">linkedin</a>
<a href="https://github.com/yourprofile">github</a>
<a href="https://twitter.com/yourprofile">twitter</a>
```

### 5. **Configure Contact Form**

In `js/main.js`, configure your form submission method:

**Option A: Formspree (Easiest)**
```javascript
// 1. Sign up at https://formspree.io (free)
// 2. Create a new form and get your form ID
// 3. Uncomment and update in main.js:

const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

**Option B: Custom Backend**
```javascript
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

### 6. **Add Your Resume**

Place your resume PDF in `assets/resume.pdf`

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

```bash
# 1. Create a new repository on GitHub
#    Name it: yourusername.github.io
#    (Replace 'yourusername' with your actual GitHub username)

# 2. Initialize git in your project folder
git init

# 3. Add all files
git add .

# 4. Commit
git commit -m "Initial portfolio commit"

# 5. Add remote repository
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **main** branch
4. Click **Save**
5. Wait 2-3 minutes for deployment

### Step 3: Access Your Site

Your portfolio will be live at:
```
https://yourusername.github.io
```

## 🌐 Connecting a Custom Domain

### If you have a `.cool`, `.studio`, or `.co` domain:

1. **In your domain registrar** (Namecheap, Porkbun, etc.):
   - Go to DNS settings
   - Add these records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: yourusername.github.io
   ```

2. **In your GitHub repository**:
   - Go to **Settings** → **Pages**
   - Under **Custom domain**, enter: `yourname.cool`
   - Click **Save**
   - Check **Enforce HTTPS** (after DNS propagates)

3. **Create CNAME file** in your repository root:
   ```
   yourname.cool
   ```

4. Wait 24-48 hours for DNS propagation

## 🛠️ Local Development

To test locally before deployment:

1. **Option A: Live Server (VS Code)**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

2. **Option B: Python**
   ```bash
   python -m http.server 8000
   ```
   Visit: `http://localhost:8000`

3. **Option C: Node.js**
   ```bash
   npx serve
   ```

## ⌨️ Keyboard Shortcuts

Built-in keyboard navigation (when not typing):
- `H` → Home
- `D` → Designer section
- `E` → Engineer section
- `S` → Sportsman section
- `C` → Contact section
- `V` → Values section

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🎯 SEO Tips

1. **Update meta description** in `index.html`:
   ```html
   <meta name="description" content="Your custom description">
   ```

2. **Add Open Graph tags** for social sharing:
   ```html
   <meta property="og:title" content="Harshaaa - Designer & Engineer">
   <meta property="og:description" content="Your description">
   <meta property="og:image" content="https://yoursite.com/preview.jpg">
   ```

3. **Create `sitemap.xml`** (optional):
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourname.cool/</loc>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

## 🐛 Troubleshooting

### Images not showing?
- Check file paths are correct (case-sensitive!)
- Ensure images are in the correct folders
- Verify image file names match HTML references

### Form not working?
- Uncomment and configure form submission in `main.js`
- Sign up for Formspree and add your form ID
- Check browser console for errors

### GitHub Pages not deploying?
- Ensure repository is named `yourusername.github.io`
- Check that main branch is selected in Pages settings
- Wait 2-3 minutes after pushing changes

### Custom domain not working?
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Use `nslookup yourname.cool` to check DNS status
- Ensure CNAME file exists in repository root

## 📦 Future Enhancements

Consider adding:
- [ ] Blog section (using Jekyll or Hugo)
- [ ] Dark/light mode toggle
- [ ] Project filters/categories
- [ ] Analytics (Google Analytics or Plausible)
- [ ] Newsletter signup
- [ ] Case study pages for projects
- [ ] Testimonials section

## 📄 License

This template is free to use for personal portfolios. Attribution appreciated but not required.

## 💬 Support

If you have questions or need help:
1. Check GitHub Issues for similar problems
2. Create a new issue with details
3. Contact via email: your.email@example.com

## 🎉 Credits

Design inspired by:
- Stefan Stefancik's portfolio
- Mechanical keyboard aesthetics
- Modern minimal web design

Built with:
- HTML5
- CSS3 (Tailwind CDN)
- Vanilla JavaScript
- Google Fonts (Inter, Space Mono)

---

**Made with ❤️ by Harshaaa**

Good luck with your portfolio! 🚀