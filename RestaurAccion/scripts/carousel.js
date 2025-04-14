document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('logoTrack');
    const slides = track.querySelectorAll('.logo-slide');
    
    // Configuración
    const scrollSpeed = 1; // Velocidad en píxeles por frame (ajustar para más rápido/lento)
    let currentPosition = 0;
    
    // Función para clonar los elementos iniciales y mantener el carrusel infinito
    function setupInfiniteCarousel() {
        // Determinar el ancho total de todos los logos
        let totalWidth = 0;
        slides.forEach(slide => {
            totalWidth += slide.offsetWidth;
        });
        
        // Crear un conjunto inicial de clones
        const initialSlides = Array.from(slides);
        initialSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });
        
        // Iniciar la animación
        animateCarousel();
    }
    
    // Función de animación
    function animateCarousel() {
        currentPosition -= scrollSpeed;
        
        // Recolocar la posición cuando el primer logo ha desaparecido completamente
        const firstSlide = track.querySelector('.logo-slide');
        if (Math.abs(currentPosition) >= firstSlide.offsetWidth) {
            // Mover el primer elemento al final
            track.appendChild(firstSlide);
            // Resetear la posición para evitar saltos
            currentPosition += firstSlide.offsetWidth;
        }
        
        // Aplicar la transformación
        track.style.transform = `translateX(${currentPosition}px)`;
        
        // Continuar la animación
        requestAnimationFrame(animateCarousel);
    }
    
    // Inicializar el carrusel después de un pequeño tiempo
    // para asegurarse de que todos los elementos estén cargados
    setTimeout(setupInfiniteCarousel, 100);
});