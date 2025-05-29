// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on system preference
if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '🌙';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️';
    }
});

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the form data to a server
    alert('Message sent successfully!');
    contactForm.reset();
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Typewriter effect for hero section that preserves HTML tags
const textElement = document.querySelector('.typewriter');
const originalHTML = textElement.innerHTML;
textElement.innerHTML = '';

let i = 0;
let tagBuffer = '';
let isTag = false;

function typeWriter() {
    if (i < originalHTML.length) {
        const char = originalHTML.charAt(i);
        
        if (char === '<') {
            isTag = true;
            tagBuffer += char;
        } else if (char === '>' && isTag) {
            tagBuffer += char;
            textElement.innerHTML += tagBuffer;
            tagBuffer = '';
            isTag = false;
        } else if (isTag) {
            tagBuffer += char;
        } else {
            textElement.innerHTML += char;
        }
        
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typewriter effect when page loads
window.addEventListener('load', typeWriter);

// Start typewriter effect when page loads