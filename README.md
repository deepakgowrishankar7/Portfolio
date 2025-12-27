# Enduri Deepak Gowri Shankar - Portfolio

A modern, responsive personal portfolio website showcasing my skills as a Computer Science Engineering student and aspiring software developer.

## Features

- **Modern Design**: Clean, minimal, and professional layout with soft blue/indigo color palette
- **Responsive**: Fully responsive design that works on mobile, tablet, and desktop
- **Smooth Animations**: Hover effects, scroll animations, and fade-ins for enhanced user experience
- **SEO Friendly**: Optimized meta tags and semantic HTML structure
- **Fast Loading**: Lightweight code with minimal dependencies
- **GitHub Pages Ready**: Easy to deploy and host on GitHub Pages

## Sections

1. **Hero Section**: Introduction with name, title, tagline, and call-to-action buttons
2. **About Me**: Personal introduction, education, and interests
3. **Skills**: Technical skills displayed in clean cards
4. **Projects**: Showcase of Python projects with descriptions and GitHub links
5. **Learning & Experience**: Academic and self-learning journey
6. **Contact**: Contact information and form

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts (Roboto)

## Contact Form Setup (EmailJS)

### Step 1: Sign up for EmailJS
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Create a free account
3. Verify your email

### Step 2: Set up Email Service
1. Go to "Email Services" in your dashboard
2. Add a new service (Gmail, Outlook, etc.)
3. Connect your email account
4. Note down the **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (deepakgowrishankar7@gmail.com)
3. Note down the **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Your Code
Replace the placeholder values in `script.js`:
```javascript
const serviceID = 'your_service_id_here';
const templateID = 'your_template_id_here';
const publicKey = 'your_public_key_here';
```

### Step 6: Test the Form
1. Fill out and submit the contact form
2. Check your email for the message
3. Messages will be sent directly to deepakgowrishankar7@gmail.com

## Features
- ✅ Direct email delivery to your Gmail
- ✅ No monthly limits on free plan
- ✅ No backend server needed
- ✅ Professional email templates
- ✅ Form validation included

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your site will be live at `https://deepakgowrishankar7.github.io/Let-s-Code/`

## Customization

- **Colors**: Modify the color variables in `styles.css`
- **Fonts**: Change the Google Fonts link in `index.html`
- **Content**: Update text, links, and project details in `index.html`
- **Animations**: Adjust timing and effects in `styles.css` and `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).