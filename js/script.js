document.addEventListener('DOMContentLoaded', function() {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    let currentLang = 'pt';
    
    langToggle.addEventListener('click', function() {
        if (currentLang === 'pt') {
            // Example translation - in a real project, you would use a proper i18n solution
            document.querySelector('html').lang = 'en';
            langToggle.textContent = 'PT';
            currentLang = 'en';
            
            // Update some example texts
            document.querySelector('.hero-title').textContent = 'Boost Your Digital Presence and Multiply Your Results';
            document.querySelector('.hero-subtitle').textContent = 'EngajaPro is an agency specialized in social media management and paid traffic, helping businesses expand their visibility and convert more customers.';
            document.querySelector('.hero-buttons .btn-primary').textContent = 'Schedule a Free Consultation';
            document.querySelector('.hero-buttons .btn-outline-light').textContent = 'Our Services';
            
            // Update highlights
            const highlights = document.querySelectorAll('.highlight-item span');
            highlights[0].textContent = 'Custom strategies for each niche';
            highlights[1].textContent = 'Proven and measurable results';
            highlights[2].textContent = 'Team specialized in performance marketing';
            
            // Update section titles
            document.querySelector('#about .section-title').innerHTML = 'About <span>EngajaPro</span>';
            document.querySelector('#services .section-title').innerHTML = 'Our <span>Services</span>';
            document.querySelector('#testimonials .section-title').innerHTML = 'What our <span>clients say</span>';
            document.querySelector('#contact .section-title').innerHTML = 'Contact <span>Us</span>';
            
            // Update CTA
            document.querySelector('.cta-content h2').textContent = 'Ready to transform your business?';
            document.querySelector('.cta-content p').textContent = 'Schedule a free consultation and discover how we can boost your results';
            document.querySelector('.cta-content .btn').textContent = 'Contact Us Now';
        } else {
            document.querySelector('html').lang = 'pt';
            langToggle.textContent = 'EN';
            currentLang = 'pt';
            
            // Revert to original Portuguese texts
            document.querySelector('.hero-title').textContent = 'Aumente Sua Presença Digital e Multiplique Seus Resultados';
            document.querySelector('.hero-subtitle').textContent = 'EngajaPro é uma agência especializada em gestão de redes sociais e tráfego pago, ajudando empresas a expandirem sua visibilidade e converterem mais clientes.';
            document.querySelector('.hero-buttons .btn-primary').textContent = 'Agende uma Consultoria Gratuita';
            document.querySelector('.hero-buttons .btn-outline-light').textContent = 'Nossos Serviços';
            
            // Revert highlights
            const highlights = document.querySelectorAll('.highlight-item span');
            highlights[0].textContent = 'Estratégias personalizadas para cada nicho';
            highlights[1].textContent = 'Resultados comprovados e mensuráveis';
            highlights[2].textContent = 'Equipe especializada em marketing de performance';
            
            // Revert section titles
            document.querySelector('#about .section-title').innerHTML = 'Sobre a <span>EngajaPro</span>';
            document.querySelector('#services .section-title').innerHTML = 'Nossos <span>Serviços</span>';
            document.querySelector('#testimonials .section-title').innerHTML = 'O que dizem <span>nossos clientes</span>';
            document.querySelector('#contact .section-title').innerHTML = 'Entre em <span>Contato</span>';
            
            // Revert CTA
            document.querySelector('.cta-content h2').textContent = 'Pronto para transformar seu negócio?';
            document.querySelector('.cta-content p').textContent = 'Agende uma consultoria gratuita e descubra como podemos alavancar seus resultados';
            document.querySelector('.cta-content .btn').textContent = 'Fale Conosco Agora';
        }
    });

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            this.reset();
        });
    }

    // Initialize AOS (Animate On Scroll) - would need to include AOS library
    // AOS.init();
    
    // Service Card Animation on Scroll
    const serviceCards = document.querySelectorAll('.service-card');
    
    function animateOnScroll() {
        serviceCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Testimonial Carousel - would use Bootstrap Carousel in a real implementation
    // This is a simplified version
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    // For mobile view, show one at a time
    if (window.innerWidth < 768) {
        showTestimonial(currentTestimonial);
        
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
});