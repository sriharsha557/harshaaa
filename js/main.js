/* ===========================================
   HARSHAAA PORTFOLIO - MAIN JAVASCRIPT
   Interactions, animations, and functionality
   =========================================== */

// ============= INITIALIZATION ============= //
document.addEventListener('DOMContentLoaded', function() {
    initCurrentYear();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initKeyboardNavigation();
});

// ============= CURRENT YEAR ============= //
function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============= SMOOTH SCROLL ============= //
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore if it's just "#" or empty
            if (!href || href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============= SCROLL ANIMATIONS ============= //
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and major elements
    const elements = document.querySelectorAll(
        'section, .work-item, .project-row, .sport-card, .vehicle-showcase, .timeline-entry, .value-item'
    );
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// ============= KEYBOARD NAVIGATION ============= //
function initKeyboardNavigation() {
    // Add keyboard shortcuts for navigation
    document.addEventListener('keydown', (e) => {
        // Only trigger if not typing in an input/textarea
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        const keyMap = {
            'h': '#home',
            'd': '#designer',
            'e': '#engineer',
            's': '#sportsman',
            'c': '#contact',
            'v': '#values'
        };
        
        const target = keyMap[e.key.toLowerCase()];
        if (target) {
            e.preventDefault();
            const element = document.querySelector(target);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
    
    // Add visual feedback on keyboard button press
    const keyboardButtons = document.querySelectorAll('.keyboard-key');
    keyboardButtons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(4px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// ============= CONTACT FORM ============= //
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Change button state
        submitButton.textContent = 'sending...';
        submitButton.disabled = true;
        
        try {
            // ============================================
            // CHANGE THIS: Add your form submission logic
            // ============================================
            
            // Option 1: Formspree (recommended)
            // Sign up at https://formspree.io and get your form endpoint
            /*
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showNotification('Message sent successfully! 🎉', 'success');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
            */
            
            // Option 2: Custom backend endpoint
            /*
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showNotification('Message sent successfully! 🎉', 'success');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
            */
            
            // Temporary: Simulate form submission (REMOVE THIS IN PRODUCTION)
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form data:', data);
            showNotification('Demo mode: Form data logged to console', 'info');
            form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// ============= NOTIFICATION SYSTEM ============= //
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        backgroundColor: type === 'success' ? '#22c55e' : 
                        type === 'error' ? '#ef4444' : '#3b82f6',
        color: 'white',
        fontWeight: '600',
        fontSize: '0.875rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ============= PARALLAX EFFECT (Optional) ============= //
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ============= IMAGE LAZY LOADING ============= //
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============= UTILITY FUNCTIONS ============= //

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============= CONSOLE EASTER EGG ============= //
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
console.log('%cLooking at the code? I like your style.', 'font-size: 14px; color: #a3a3a3;');
console.log('%cWant to work together? Reach out at: your.email@example.com', 'font-size: 14px; color: #a3a3a3;');

// ============= EXPORT FOR TESTING (Optional) ============= //
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initSmoothScroll,
        initScrollAnimations,
        initContactForm,
        showNotification
    };
}
