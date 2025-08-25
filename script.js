// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initParallaxEffects();
    initFloatingElements();
    initCardAnimations();
    initVideoGallery();
});

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero button smooth scrolling (if buttons exist)
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons.length > 0) {
        heroButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (this.textContent === 'Enroll Now') {
                    // Scroll to contact section for enrollment
                    const contactSection = document.querySelector('#contact');
                    const offsetTop = contactSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                } else if (this.textContent === 'Learn More') {
                    const aboutSection = document.querySelector('#about');
                    const offsetTop = aboutSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add animation classes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.classList.add('slide-in-left');
        } else {
            section.classList.add('slide-in-right');
        }
    });

    // Animate program cards on scroll
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Animate method cards on scroll
    const methodCards = document.querySelectorAll('.method-card');
    methodCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Animate video and image cards on scroll
    const videoCards = document.querySelectorAll('.video-card');
    const imageCards = document.querySelectorAll('.image-card');
    
    [...videoCards, ...imageCards].forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });
    
    // Initialize testimonials carousel
    initTestimonialsCarousel();
    
    // Initialize FAQ carousel
    initFAQCarousel();
    
    // Animate testimonial cards on scroll
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Animate rule cards on scroll
    const ruleCards = document.querySelectorAll('.rule-card');
    ruleCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });
}

// Parallax Effects
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-elements > *');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Parallax for hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const heroSpeed = 0.3;
            const heroYPos = -(scrolled * heroSpeed);
            heroContent.style.transform = `translateY(${heroYPos}px)`;
        }
    });
}

// Floating Elements Animation
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-elements > *');
    
    floatingElements.forEach((element, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            element.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, 3000 + (index * 1000));
    });
}

// Card Animations
function initCardAnimations() {
    // Program card hover effects
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateY(15deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0deg)';
        });
    });

    // Method card hover effects
    const methodCards = document.querySelectorAll('.method-card');
    methodCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Highlight card hover effects
    const highlightCards = document.querySelectorAll('.highlight-card');
    highlightCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Rule card hover effects
    const ruleCards = document.querySelectorAll('.rule-card');
    ruleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contact item hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Social media links hover effects
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Button ripple effect
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add loading animation for page load
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a subtle entrance animation for the entire page
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add CSS for page load animation
const loadStyle = document.createElement('style');
loadStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
`;
document.head.appendChild(loadStyle);

// Gallery Functionality (Videos and Images)
function initVideoGallery() {
    const videoCards = document.querySelectorAll('.video-card');
    const imageCards = document.querySelectorAll('.image-card');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    let isExpanded = false;

    // Google Drive URL mapping - Add your Google Drive links here
    const googleDriveUrls = {
        '1st-day-of-school.mp4': 'https://drive.google.com/file/d/1dYFxt-70y3EK5CdA0FoNjSSpyP6lgqtU/view?usp=sharing',
        'kite-day.mp4': 'https://drive.google.com/file/d/1pricbzNoBFcxp5LHjPgTTsbas_y7hxvB/view?usp=sharing',
        'pink-day.mp4': 'https://drive.google.com/file/d/1YC4hWLXwuMJEtuzSnRVAirbnKrxcH6Wf/view?usp=sharing',
        'yellow-day.mp4': 'https://drive.google.com/file/d/1c_tOutgwe9Y7CTt4cchlsDLv-EgSbYjW/view?usp=sharing',
        'green-day.mp4': 'https://drive.google.com/file/d/1lla85zQfF46IGYuRH_MXspmi0zRCEEKm/view?usp=sharing',
        'red-day.mp4': 'https://drive.google.com/file/d/1zVaAGBur7WB5egdU-NlqxQsEgBqYVJYG/view?usp=sharing',
        'blue-day.mp4': 'https://drive.google.com/file/d/1Bbl5_9QXttpO0JGc4ua9MgFxjtFpb_i3/view?usp=sharing',
        'friendship-day.mp4': 'https://drive.google.com/file/d/1Avil1fRVOnVKsbIdH0JM0PGmW5KjTG-s/view?usp=sharing',
        'yoga-day.mp4': 'https://drive.google.com/file/d/1almXGRYcfnVMWGqxk--lMzgq_6tXgreN/view?usp=sharing',
        'science-exhibition.mp4': 'https://drive.google.com/file/d/1iy6ItFC46k4SVtlRcXcW7_ocPEnchg4P/view?usp=sharing',
        'languages.mp4': 'https://drive.google.com/file/d/1fdEuOAC8S8wQaCR6aJXPZJCnvsNea67W/view?usp=sharing',
        'arithmetic.mp4': 'https://drive.google.com/file/d/1E4az3eL6NAHKQhxO4j0cXrrGyDjoAbxP/view?usp=sharing'
    };

    // Google Drive folder links for images - Add your Google Drive folder links here
    const googleDriveImageFolders = {
        'annual-day': 'https://drive.google.com/drive/folders/10EVwhiGxCNC9PQzFSsMZlmDZ8KA3r99s?usp=sharing',
        'ganesha-festival': 'https://drive.google.com/drive/folders/1AhdjFaE2005oQschR4C8NHG01euM-2dJ?usp=sharing',
        'independence-day': 'https://drive.google.com/drive/folders/1qcgCTbhd3vwagMXsU72_j6ctwXUamUiQ?usp=sharing',
        'krishna-janmastami': 'https://drive.google.com/drive/folders/1i3hVnN1v8NpJhtlegZV5NG4z7v1WxCGk?usp=sharing',
        'school': 'https://drive.google.com/drive/folders/17PzYOgewmydkDWWi_iVZB-dFmv-JwaR1?usp=sharing'
    };

    // Add click event to video cards
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            const videoTitle = this.querySelector('.video-info h3').textContent;
            const googleDriveUrl = googleDriveUrls[videoSrc];
            
            if (googleDriveUrl && googleDriveUrl !== 'YOUR_GOOGLE_DRIVE_LINK_HERE') {
                // Open Google Drive link in new tab
                window.open(googleDriveUrl, '_blank');
            } else {
                // Fallback: Show message to add Google Drive link
                alert('Please add the Google Drive link for ' + videoTitle + ' in the script.js file.');
            }
        });
    });

    // Add click event to image cards
    imageCards.forEach(card => {
        card.addEventListener('click', function() {
            const eventType = this.getAttribute('data-image').split('.')[0]; // Get event name without extension
            const eventTitle = this.querySelector('.image-info h3').textContent;
            const googleDriveFolderUrl = googleDriveImageFolders[eventType];
            
            if (googleDriveFolderUrl && googleDriveFolderUrl !== 'YOUR_GOOGLE_DRIVE_FOLDER_LINK_HERE') {
                // Open Google Drive folder link in new tab
                window.open(googleDriveFolderUrl, '_blank');
            } else {
                // Fallback: Show message to add Google Drive folder link
                alert('Please add the Google Drive folder link for ' + eventTitle + ' in the script.js file.');
            }
        });
    });

    // View More functionality
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            const hiddenCards = document.querySelectorAll('.video-card.hidden, .image-card.hidden');
            const visibleCards = document.querySelectorAll('.video-card.visible, .image-card.visible');
            
            if (!isExpanded) {
                // Show all cards
                hiddenCards.forEach(card => {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                });
                
                // Update button text and icon
                this.querySelector('.btn-text').textContent = 'Show Less';
                this.classList.add('expanded');
                isExpanded = true;
            } else {
                // Hide extra cards (keep only first 3)
                visibleCards.forEach((card, index) => {
                    if (index >= 3) {
                        card.classList.remove('visible');
                        card.classList.add('hidden');
                    }
                });
                
                // Update button text and icon
                this.querySelector('.btn-text').textContent = 'View More Events';
                this.classList.remove('expanded');
                isExpanded = false;
            }
        });
    }

    // Add hover effects for all cards
    const allCards = [...videoCards, ...imageCards];
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Testimonials Carousel Functionality
function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    if (!carousel) return;
    
    const track = carousel.querySelector('.carousel-track');
    const cards = carousel.querySelectorAll('.testimonial-card');
    const dots = carousel.querySelectorAll('.dot');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    
    let currentSlide = 0;
    let autoPlayInterval;
    
    // Function to show slide
    function showSlide(index) {
        // Remove active class from all cards and dots
        cards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide
        cards[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Update track position
        track.style.transform = `translateX(-${index * 100}%)`;
        
        currentSlide = index;
    }
    
    // Function to go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % cards.length;
        showSlide(currentSlide);
    }
    
    // Function to go to previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + cards.length) % cards.length;
        showSlide(currentSlide);
    }
    
    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoPlay();
        });
    });
    
    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function resetAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }
    }
    
    // Pause auto-play on hover
    carousel.addEventListener('mouseenter', () => {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
    
    // Initialize first slide
    showSlide(0);
    
    // Start auto-play
    startAutoPlay();
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                nextSlide(); // Swipe left
            } else {
                prevSlide(); // Swipe right
            }
            resetAutoPlay();
        }
    });
}

// FAQ Carousel Functionality
function initFAQCarousel() {
    const carousel = document.querySelector('.faq-carousel');
    if (!carousel) {
        console.log('FAQ carousel not found');
        return;
    }
    
    console.log('FAQ carousel found, initializing...');
    
    const track = carousel.querySelector('.carousel-track');
    const cards = carousel.querySelectorAll('.faq-item');
    const dots = carousel.querySelectorAll('.dot');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    
    let currentSlide = 0;
    let autoPlayInterval;
    
    // Function to show slide
    function showSlide(index) {
        console.log('Showing slide:', index);
        
        // Remove active class from all cards and dots
        cards.forEach(card => {
            card.classList.remove('active');
            card.style.opacity = '0';
            card.style.visibility = 'hidden';
        });
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide
        cards[index].classList.add('active');
        cards[index].style.opacity = '1';
        cards[index].style.visibility = 'visible';
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Function to go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % cards.length;
        showSlide(currentSlide);
    }
    
    // Function to go to previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + cards.length) % cards.length;
        showSlide(currentSlide);
    }
    
    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoPlay();
        });
    });
    
    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    }
    
    function resetAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }
    }
    
    // Pause auto-play on hover
    carousel.addEventListener('mouseenter', () => {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
    
    // Initialize first slide
    showSlide(0);
    
    // Start auto-play
    startAutoPlay();
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                nextSlide(); // Swipe left
            } else {
                prevSlide(); // Swipe right
            }
            resetAutoPlay();
        }
    });
}

 