document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slides');
        const totalSlides = slides.children.length;

        // Boucle les slides si l'index dépasse
        currentSlide = (index + totalSlides) % totalSlides;

        // Ajuste le défilement
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Fonction pour aller à la slide suivante
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Fonction pour revenir à la slide précédente
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Ajoutez les événements aux boutons
    const nextButton = document.querySelector('.arrow.right');
    const prevButton = document.querySelector('.arrow.left');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
	
	    // Synchronisation du mode sombre avec la page principale
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Met à jour l'icône
    }
});
