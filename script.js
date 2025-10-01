document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const textToType = "Selamat Datang di Profile Saya";
        let index = 0;
        function type() {
            if (index < textToType.length) {
                typewriterElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    } else {
        console.error('Error: Elemen .typewriter tidak ditemukan.');
    }

    const sections = document.querySelectorAll('.section');
    const revealSection = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
            }
        });
    };
    
    window.addEventListener('scroll', revealSection);
    revealSection();
});