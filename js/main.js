/* ===========================================
   HARSHA PORTFOLIO - UPDATED JAVASCRIPT
   Interactions, animations, and functionality
   =========================================== */

// ============= TOOLS DATA ============= //
const toolsData = [
    // Database
    { tool: "Sybase IQ", category: "Database", years: "15+ years", note: "Columnar database, query optimization" },
    { tool: "Oracle", category: "Database", years: "20+ years", note: "Certified DBA" },
    { tool: "SQL Server", category: "Database", years: "3+ years", note: "T-SQL, stored procedures" },
    { tool: "DB2", category: "Database", years: "2+ years", note: "Mainframe DB" },
    
    // BI & Reporting
    { tool: "Power BI", category: "BI", years: "2+ years", note: "DAX, data modeling, interactive dashboards" },
    { tool: "Business Objects", category: "BI", years: "3+ years", note: "Visual analytics, storytelling" },
    
    // ETL & Data
    { tool: "Informatica", category: "ETL", years: "8+ years", note: "PowerCenter, data integration" },
    { tool: "Data Warehousing", category: "ETL", years: "2+ years", note: "Dimensional modeling methodology" },
    { tool: "Data Vault 2.0", category: "ETL", years: "3+ years", note: "Data vaulting methodology" },
    { tool: "Airflow", category: "ETL", years: "2+ years", note: "Workflow orchestration" },
    
    // Development
    { tool: "Python", category: "Development", years: "2+ years", note: "Pandas, NumPy, data science" },
    { tool: "Streamlit", category: "Development", years: "2+ years", note: "Rapid AI app development" },
    { tool: "SQL", category: "Development", years: "15+ years", note: "Complex queries, optimization" },
    { tool: "Git", category: "Development", years: "2+ years", note: "Version control, collaboration" },
    
    // Cloud & DevOps
    { tool: "Azure", category: "Cloud", years: "2+ years", note: "Cloud data solutions" },
    { tool: "Docker", category: "Cloud", years: "2+ years", note: "Containerization" },
];

// ============= INITIALIZATION ============= //
document.addEventListener('DOMContentLoaded', function() {
    initCurrentYear();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initKeyboardNavigation();
    initAudioControl();
    initVideoBackground();
    initToolsSection();
});

// ============= TOOLS SECTION ============= //
function initToolsSection() {
    const toolsGrid = document.getElementById('tools-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!toolsGrid) return;
    
    // Render all tools
    renderTools('all');
    
    // Add filter event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter tools
            const category = this.dataset.category;
            renderTools(category);
        });
    });
}

function renderTools(category) {
    const toolsGrid = document.getElementById('tools-grid');
    if (!toolsGrid) return;
    
    // Filter tools based on category
    const filteredTools = category === 'all' 
        ? toolsData 
        : toolsData.filter(tool => tool.category === category);
    
    // Clear grid
    toolsGrid.innerHTML = '';
    
    // Render filtered tools
    filteredTools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card show';
        toolCard.innerHTML = `
            <h3>${tool.tool}</h3>
            <span class="tool-category">${tool.category}</span>
            <p class="tool-years">${tool.years}</p>
            <p class="tool-note">${tool.note}</p>
        `;
        toolsGrid.appendChild(toolCard);
    });
    
    // Trigger fade-in animation
    setTimeout(() => {
        toolsGrid.querySelectorAll('.tool-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 50);
        });
    }, 50);
}

// ============= VIDEO BACKGROUND ============= //
function initVideoBackground() {
    const video = document.getElementById('bg-video');
    
    if (!video) return;
    
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    
    video.addEventListener('loadeddata', function() {
        console.log('Background video loaded successfully');
    });
    
    video.addEventListener('error', function(e) {
        console.error('Video background error:', e);
        const videoContainer = document.querySelector('.video-background');
        if (videoContainer) {
            videoContainer.style.display = 'none';
        }
    });
    
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log('Video autoplay started');
            })
            .catch(error => {
                console.log('Video autoplay prevented:', error);
                document.body.addEventListener('click', function startVideo() {
                    video.play();
                    document.body.removeEventListener('click', startVideo);
                }, { once: true });
            });
    }
    
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            video.pause();
        } else {
            video.play();
        }
    });
}

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
            
            if (!href || href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
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
    
    const elements = document.querySelectorAll(
        'section, .work-item, .tool-card, .beyond-card, .timeline-entry, .value-item'
    );
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// ============= KEYBOARD NAVIGATION ============= //
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        const keyMap = {
            'h': '#home',
            't': '#tools',
            'd': '#design',
            'b': '#beyond',
            'j': '#journey',
            'c': '#contact'
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

// ============= AUDIO CONTROL ============= //
function initAudioControl() {
    const audioToggle = document.getElementById('audio-toggle');
    const audio = document.getElementById('background-audio');
    
    if (!audioToggle || !audio) return;
    
    audio.volume = 0.3;
    
    audioToggle.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().then(() => {
                audioToggle.classList.add('playing');
                showNotification('Ocean waves music enabled', 'info');
            }).catch(error => {
                console.error('Audio playback failed:', error);
                showNotification('Could not play audio', 'error');
            });
        } else {
            audio.pause();
            audioToggle.classList.remove('playing');
            showNotification('Audio muted', 'info');
        }
    });
    
    audio.addEventListener('ended', function() {
        audioToggle.classList.remove('playing');
    });
    
    audio.addEventListener('error', function(e) {
        console.error('Audio error:', e);
        audioToggle.style.display = 'none';
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
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        submitButton.textContent = 'sending...';
        submitButton.disabled = true;
        
        try {
            // ============================================
            // CHANGE THIS: Add your form submission logic
            // ============================================
            
            // Option 1: Formspree
            /*
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showNotification('Message sent successfully!', 'success');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
            */
            
            // Temporary: Simulate form submission
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
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
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
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ============= UTILITY FUNCTIONS ============= //
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

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============= CONSOLE MESSAGE ============= //
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
console.log('%cLooking at the code? I like your style.', 'font-size: 14px; color: #a3a3a3;');
console.log('%cWant to collaborate? Reach out via the contact form.', 'font-size: 14px; color: #a3a3a3;');

// ============= EXPORT FOR TESTING (Optional) ============= //
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initSmoothScroll,
        initScrollAnimations,
        initContactForm,
        initVideoBackground,
        showNotification
    };
}
