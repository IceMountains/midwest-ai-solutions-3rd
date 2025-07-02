alert('script.js loaded!');

// Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
        document.body.style.overflow = mobileNavOverlay.classList.contains('active') ? 'hidden' : '';
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }

    // Close menu when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            closeMobileMenu();
            // If it's an in-page anchor link, scroll smoothly
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 200); // Wait for menu to close
                }
            }
            // For external/page links, allow default navigation
        });
    });

    // Close menu when clicking outside
    mobileNavOverlay.addEventListener('click', (e) => {
        if (e.target === mobileNavOverlay) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

// Mobile touch optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Prevent zoom on double tap for buttons
    const buttons = document.querySelectorAll('.btn, .mobile-nav-link, .mobile-cta-btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', (e) => {
            e.preventDefault();
        }, { passive: false });
    });

    // Add touch feedback for mobile
    const touchElements = document.querySelectorAll('.feature-card, .btn, .mobile-nav-link');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });

    // Mobile hero slider optimizations
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider && window.innerWidth <= 768) {
        // Add touch/swipe support for mobile slider
        let startX = 0;
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const totalSlides = slides.length;

        heroSlider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        heroSlider.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            const threshold = 50;

            if (Math.abs(diffX) > threshold) {
                if (diffX > 0 && currentSlide < totalSlides - 1) {
                    // Swipe left - next slide
                    currentSlide++;
                } else if (diffX < 0 && currentSlide > 0) {
                    // Swipe right - previous slide
                    currentSlide--;
                }
                
                // Update active slide
                slides.forEach((slide, index) => {
                    slide.classList.toggle('active', index === currentSlide);
                });
            }
        });
    }
});

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

// Mobile menu functionality is now handled by the new mobile navigation system above

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