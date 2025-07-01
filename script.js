alert('script.js loaded!');
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .about-content, .contact-content, .section-header');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Form input focus effects
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Glow effect for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.2)';
    });
});

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Uncomment the lines below if you want a typing effect
// document.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 50);
//     }
// });

// Mobile menu toggle (if you want to add a mobile menu later)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
    `;
    
    // Add hamburger to navbar
    navbar.querySelector('.nav-container').appendChild(hamburger);
    
    // Mobile menu functionality
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Show hamburger on mobile
    function checkMobile() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            navMenu.style.display = 'none';
        } else {
            hamburger.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
}

// Initialize mobile menu
createMobileMenu();

// Add some particle effects (optional)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float 6s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 6}s;
        `;
        hero.appendChild(particle);
    }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
createParticles();

// Form submission handling
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Test animation after page loads
    setTimeout(() => {
        console.log('Testing animation system...');
        animateMetricSlide(0);
    }, 2000);
});

console.log('Dark Glow Template loaded successfully! 🚀');

document.addEventListener('DOMContentLoaded', function () {
    // Simple test animation - should work immediately
    console.log('Script loaded, testing basic animation...');
    setTimeout(() => {
        const testElement = document.getElementById('productivity-number');
        if (testElement) {
            console.log('Found productivity number element, testing animation...');
            let count = 0;
            const interval = setInterval(() => {
                count += 5;
                testElement.textContent = count + '%';
                console.log('Count:', count);
                if (count >= 85) {
                    clearInterval(interval);
                    console.log('Test animation complete');
                }
            }, 100);
        } else {
            console.log('Productivity number element NOT found!');
        }
    }, 1000);

    // --- Hero Metric Slideshow (Auto-advance, no controls) ---
    const slides = document.querySelectorAll('.hero-slide');
    let current = 0;
    let autoPlayTimeout;
    const SLIDE_DURATION = 4000; // ms (animation + pause, was 2200)

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        current = idx;
        setTimeout(() => animateMetricSlide(idx), 100);
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
        scheduleNext();
    }

    function scheduleNext() {
        clearTimeout(autoPlayTimeout);
        autoPlayTimeout = setTimeout(nextSlide, SLIDE_DURATION);
    }

    // Init
    showSlide(0);
    scheduleNext();

    // --- Hero Metric Animation Logic ---
    function animateMetricSlide(idx) {
        console.log('animateMetricSlide called with idx:', idx);
        const activeSlide = document.querySelector('.hero-slide.active');
        console.log('activeSlide found:', !!activeSlide);
        if (!activeSlide) return;
        // Productivity Slide
        if (idx === 0) {
            const num = activeSlide.querySelector('#productivity-number');
            const bar = activeSlide.querySelector('#productivity-bar');
            console.log('Productivity elements found:', !!num, !!bar);
            if (num && bar) {
                console.log('Starting productivity animation');
                let start = 0;
                let end = 85;
                let duration = 1200;
                let startTime = null;
                function animateNumBar(ts) {
                    if (!startTime) startTime = ts;
                    let progress = Math.min((ts - startTime) / duration, 1);
                    let value = Math.floor(progress * (end - start) + start);
                    num.textContent = value + '%';
                    bar.setAttribute('width', 240 * (value / 100));
                    console.log('Animation frame:', value + '%');
                    if (progress < 1) requestAnimationFrame(animateNumBar);
                    else {
                        num.textContent = end + '%';
                        bar.setAttribute('width', 240 * (end / 100));
                        console.log('Animation complete');
                    }
                }
                num.textContent = '0%';
                bar.setAttribute('width', 0);
                requestAnimationFrame(animateNumBar);
            } else {
                console.log('Productivity elements not found');
            }
        }
        // Price Savings Slide
        if (idx === 1) {
            const num = activeSlide.querySelector('#savings-num');
            const bar = activeSlide.querySelector('#savings-bar');
            if (num && bar) {
                let start = 0;
                let end = 40000;
                let duration = 1200;
                let startTime = null;
                function animateNumBar(ts) {
                    if (!startTime) startTime = ts;
                    let progress = Math.min((ts - startTime) / duration, 1);
                    let value = Math.floor(progress * (end - start) + start);
                    num.textContent = '$' + value.toLocaleString();
                    bar.setAttribute('width', 200 * (value / 40000));
                    if (progress < 1) requestAnimationFrame(animateNumBar);
                    else {
                        num.textContent = '$40,000';
                        bar.setAttribute('width', 200);
                    }
                }
                num.textContent = '$0';
                bar.setAttribute('width', 0);
                requestAnimationFrame(animateNumBar);
            }
        }
        // Efficiency Slide
        if (idx === 2) {
            const num = activeSlide.querySelector('#efficiency-num');
            const bar = activeSlide.querySelector('#efficiency-bar');
            if (num && bar) {
                let start = 0;
                let end = 60;
                let duration = 1200;
                let startTime = null;
                function animateNumBar(ts) {
                    if (!startTime) startTime = ts;
                    let progress = Math.min((ts - startTime) / duration, 1);
                    let value = Math.floor(progress * (end - start) + start);
                    num.textContent = value + '%';
                    bar.setAttribute('width', 200 * (value / 100));
                    if (progress < 1) requestAnimationFrame(animateNumBar);
                    else {
                        num.textContent = end + '%';
                        bar.setAttribute('width', 200 * (end / 100));
                    }
                }
                num.textContent = '0%';
                bar.setAttribute('width', 0);
                requestAnimationFrame(animateNumBar);
            }
        }
        // Web Traffic Slide
        if (idx === 3) {
            const num = activeSlide.querySelector('#traffic-num');
            const bar = activeSlide.querySelector('#traffic-bar');
            if (num && bar) {
                let start = 0;
                let end = 150;
                let duration = 1200;
                let startTime = null;
                function animateNumBar(ts) {
                    if (!startTime) startTime = ts;
                    let progress = Math.min((ts - startTime) / duration, 1);
                    let value = Math.floor(progress * (end - start) + start);
                    num.textContent = value + '%';
                    bar.setAttribute('width', 200 * (value / 100));
                    if (progress < 1) requestAnimationFrame(animateNumBar);
                    else {
                        num.textContent = end + '%';
                        bar.setAttribute('width', 200 * (end / 100));
                    }
                }
                num.textContent = '0%';
                bar.setAttribute('width', 0);
                requestAnimationFrame(animateNumBar);
            }
        }
    }
}); 