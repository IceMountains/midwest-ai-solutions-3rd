# Dark Glow Template 🚀

A modern, responsive website template with a dark theme and glowing effects inspired by Framer's design aesthetic. Perfect for portfolios, business websites, or any project that needs a sleek, professional look.

## ✨ Features

- **Dark Theme**: Sophisticated dark background with gradient effects
- **Glowing Elements**: Animated glow effects on buttons, cards, and interactive elements
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, hover animations, and parallax scrolling
- **Modern Typography**: Clean, readable fonts with gradient text effects
- **Interactive Components**: Form validation, smooth scrolling, and dynamic effects
- **Placeholder Content**: Easy-to-replace mock content and images

## 🎨 Design Elements

### Glow Effects
- **Animated glow line** across the hero section
- **Button glows** with hover effects
- **Card glows** on hover
- **Text gradient effects** with subtle shadows
- **Navigation link glows** on hover

### Color Scheme
- **Primary**: Cyan (#00d4ff) to Magenta (#ff00ff) gradients
- **Background**: Dark gradients (#0a0a0a to #1a1a1a)
- **Text**: White (#ffffff) and light gray (#cccccc)
- **Accents**: Semi-transparent whites for depth

## 📁 File Structure

```
new-project-2/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript interactions
└── README.md           # This file
```

## 🛠️ Customization Guide

### 1. Replace Text Content

#### Hero Section
```html
<!-- In index.html, around line 25-35 -->
<h1 class="hero-title">
    <span class="title-line">Your Amazing</span>
    <span class="title-line highlight">Project Title</span>
</h1>
<p class="hero-subtitle">
    This is where your compelling subtitle goes...
</p>
```

#### Features Section
```html
<!-- Around line 50-80 -->
<h3 class="feature-title">Feature One</h3>
<p class="feature-description">
    This is where you describe your first amazing feature...
</p>
```

#### About Section
```html
<!-- Around line 90-100 -->
<h2 class="section-title">About Us</h2>
<p class="about-description">
    This is where you tell your story...
</p>
```

### 2. Replace Images

#### Current Placeholder Structure
```html
<div class="placeholder-image">
    <div class="image-placeholder">
        <span>Hero Image</span>
    </div>
</div>
```

#### Replace with Real Images
```html
<div class="placeholder-image">
    <img src="path/to/your/image.jpg" alt="Description" class="hero-image">
</div>
```

#### Add CSS for Real Images
```css
/* Add to styles.css */
.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.hero-image:hover {
    transform: scale(1.02);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
}
```

### 3. Customize Colors

#### Primary Colors
```css
/* In styles.css, find and modify these values */
:root {
    --primary-cyan: #00d4ff;
    --primary-magenta: #ff00ff;
    --dark-bg: #0a0a0a;
    --dark-bg-secondary: #1a1a1a;
}
```

#### Gradient Effects
```css
/* Modify gradient directions and colors */
background: linear-gradient(45deg, #00d4ff, #ff00ff);
/* Change 45deg to other angles like 90deg, 135deg, etc. */
```

### 4. Update Contact Information

```html
<!-- Around line 120-140 -->
<div class="contact-details">
    <h4>Email</h4>
    <p>hello@yourcompany.com</p>
</div>
<div class="contact-details">
    <h4>Phone</h4>
    <p>+1 (555) 123-4567</p>
</div>
<div class="contact-details">
    <h4>Location</h4>
    <p>Your City, State</p>
</div>
```

### 5. Customize Navigation

```html
<!-- Around line 15-20 -->
<div class="nav-logo">
    <span class="logo-text">LOGO</span>
</div>
<ul class="nav-menu">
    <li><a href="#home" class="nav-link">Home</a></li>
    <li><a href="#about" class="nav-link">About</a></li>
    <li><a href="#services" class="nav-link">Services</a></li>
    <li><a href="#contact" class="nav-link">Contact</a></li>
</ul>
```

### 6. Update Footer

```html
<!-- Around line 150-170 -->
<div class="footer-section">
    <h4>Your Company</h4>
    <p>Making the world a better place through innovation and creativity.</p>
</div>
<div class="footer-section">
    <h4>Quick Links</h4>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</div>
```

## 🚀 Getting Started

1. **Open the files** in your code editor
2. **Customize the content** following the guide above
3. **Replace placeholder images** with your own
4. **Test locally** by opening `index.html` in a browser
5. **Deploy** to your hosting service

## 🎯 Quick Customization Checklist

- [ ] Update hero title and subtitle
- [ ] Replace feature descriptions
- [ ] Add your about content
- [ ] Update contact information
- [ ] Replace placeholder images
- [ ] Customize logo/brand name
- [ ] Update footer links and company info
- [ ] Test on mobile devices
- [ ] Optimize images for web

## 🔧 Advanced Customization

### Add More Sections
Copy the structure of existing sections and modify:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">New Section</h2>
            <p class="section-subtitle">Description</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Custom Animations
Add new CSS animations:
```css
@keyframes yourAnimation {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}

.your-element {
    animation: yourAnimation 0.8s ease-out;
}
```

### Modify Glow Effects
Adjust glow intensity:
```css
/* Stronger glow */
box-shadow: 0 0 40px rgba(0, 212, 255, 0.5);

/* Softer glow */
box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 Design Inspiration

This template is inspired by modern design trends seen in:
- Framer's website design
- Contemporary tech company websites
- Modern portfolio designs
- Dark theme UI/UX patterns

## 📄 License

Feel free to use this template for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Support

If you need help customizing this template or have questions, feel free to ask!

---

**Happy coding! 🚀** 