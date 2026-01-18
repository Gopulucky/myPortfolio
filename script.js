document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Animation (Fade In)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation to specific elements
    const animateElements = document.querySelectorAll('.section-title, .about-text, .project-card, .timeline-item');

    // Add CSS class for animation dynamically to avoid cluttering CSS file if JS fails
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            animation: fadeInUp 1s ease forwards;
        }
        
        .section-title, .about-text, .project-card, .timeline-item {
            opacity: 0;
            /* No movement, just clean fade */
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    // Infinite Scroll Logic (Clone Items)
    const certTrack = document.querySelector('.cert-track');
    if (certTrack) {
        const certCards = document.querySelectorAll('.cert-card');
        certCards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true'); // Hide from screen readers
            certTrack.appendChild(clone);
        });
    }

    animateElements.forEach(el => {
        observer.observe(el);
    });
});
