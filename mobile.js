/* ========================================
   MOBILE-SPECIFIC SCRIPTS
   Touch interactions & mobile UX
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // SWIPE TO CLOSE MOBILE MENU
    // ========================================
    const navLinks = document.getElementById('nav-links');
    const navToggle = document.getElementById('nav-toggle');
    let touchStartX = 0;
    let touchEndX = 0;

    navLinks.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    navLinks.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        // Swipe right to close
        if (touchEndX - touchStartX > 80) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }, { passive: true });

    // ========================================
    // CLOSE MENU ON BACKDROP TAP
    // ========================================
    navLinks.addEventListener('click', (e) => {
        if (e.target === navLinks) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // ========================================
    // PREVENT BODY SCROLL WHEN MENU IS OPEN
    // ========================================
    const observer = new MutationObserver(() => {
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    observer.observe(navLinks, { attributes: true, attributeFilter: ['class'] });

    // ========================================
    // SMOOTH SCROLL WITH OFFSET FOR MOBILE NAV
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 70; // smaller nav on mobile
                const y = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }

            // Close menu after clicking a link
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ========================================
    // TOUCH FEEDBACK ON CARDS
    // ========================================
    const cards = document.querySelectorAll(
        '.skill-item, .cert-card, .contact-item, .project-featured'
    );

    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(0.98)';
            card.style.transition = 'transform 0.15s ease';
        }, { passive: true });

        card.addEventListener('touchend', () => {
            card.style.transform = '';
        }, { passive: true });
    });

    // ========================================
    // HIDE NAV ON SCROLL DOWN, SHOW ON SCROLL UP
    // ========================================
    const nav = document.getElementById('nav');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNav() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide nav
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show nav
            nav.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    }, { passive: true });

    // ========================================
    // LAZY REVEAL - LIGHTER FOR MOBILE
    // ========================================
    const revealEls = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    revealEls.forEach(el => revealObserver.observe(el));

});
