document.addEventListener('DOMContentLoaded', () => {
    // === DARK MODE ===
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('#theme-icon');

    // Ajouter un événement de clic pour changer de mode
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeIcon.classList.toggle('fa-moon', !isDark);
        themeIcon.classList.toggle('fa-sun', isDark);
        localStorage.setItem("dark-mode", isDark); // Sauvegarde l'état
    });

    // === BOUTON DE RETOUR EN HAUT ===
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.textContent = '⬆';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        font-size: 20px;
        background-color: #FFD94A;
        color: #333;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 1000;
    `;
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.pointerEvents = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // === ANIMATION DES SECTIONS ===
    const sections = document.querySelectorAll('.section-anim, .timeline-item, .experience-item, .passion, .skill-block');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'all 0.5s ease-out';
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });

    // === HAMBURGER MENU ===
    const navLinks = document.querySelectorAll(".nav-links a");
    const checkBox = document.getElementById("check");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (checkBox.checked) {
                checkBox.checked = false;
            }
        });
    });
});