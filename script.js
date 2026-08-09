/* ========================================
   CLEAN PORTFOLIO - SCRIPTS
   Minimal, professional interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // DARK MODE TOGGLE
    // ========================================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');

        if (isDark) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // ========================================
    // NAVBAR SCROLL
    // ========================================
    const nav = document.getElementById('nav');
    const toTop = document.getElementById('to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        if (window.scrollY > 400) {
            toTop.classList.add('visible');
        } else {
            toTop.classList.remove('visible');
        }
    });

    toTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ========================================
    // ACTIVE NAV LINK
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        const scrollY = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // ========================================
    // MOBILE NAV TOGGLE
    // ========================================
    const toggle = document.getElementById('nav-toggle');
    const navLinksEl = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navLinksEl.classList.toggle('active');
    });

    navLinksEl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            navLinksEl.classList.remove('active');
        });
    });

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            if (target === '#') return;
            e.preventDefault();
            const el = document.querySelector(target);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ========================================
    // SCROLL REVEAL
    // ========================================
    const revealElements = document.querySelectorAll(
        '.section-label, .section-heading, .section-desc, .about-grid, ' +
        '.skill-item, .project-featured, .projects-small, .cert-card, ' +
        '.edu-card, .contact-grid, .hero-content'
    );

    revealElements.forEach(el => el.classList.add('reveal-up'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));

    // ========================================
    // CONTACT FORM & EMAILJS INTEGRATION
    // ========================================
    const contactForm = document.getElementById('contact-form');
    const formSubmitBtn = document.getElementById('submit-btn');

    if (window.emailjs) {
        emailjs.init('Pobn51AOiVU2S1gz4');
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (formSubmitBtn) {
                formSubmitBtn.disabled = true;
                formSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            }

            if (window.emailjs) {
                const templateParams = {
                    name: document.getElementById('name').value,
                    from_name: document.getElementById('name').value,
                    from_email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };

                emailjs.send('service_443wlmm', 'template_snw2epp', templateParams)
                    .then(() => {
                        formSubmitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                        formSubmitBtn.style.background = '#16a34a';
                        contactForm.reset();
                    })
                    .catch((err) => {
                        console.error('EmailJS Error:', err);
                        formSubmitBtn.innerHTML = '<i class="fas fa-times"></i> Send Failed';
                        formSubmitBtn.style.background = '#dc2626';
                    })
                    .finally(() => {
                        setTimeout(() => {
                            if (formSubmitBtn) {
                                formSubmitBtn.disabled = false;
                                formSubmitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                                formSubmitBtn.style.background = '';
                            }
                        }, 2500);
                    });
            } else {
                formSubmitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                formSubmitBtn.style.background = '#16a34a';
                contactForm.reset();
                setTimeout(() => {
                    if (formSubmitBtn) {
                        formSubmitBtn.disabled = false;
                        formSubmitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                        formSubmitBtn.style.background = '';
                    }
                }, 2500);
            }
        });
    }

    // ========================================
    // CERTIFICATE LIGHTBOX
    // ========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const imageCards = document.querySelectorAll('.cert-image-card');

    imageCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.getAttribute('data-img');
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
