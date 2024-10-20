let lastScrollTop = 0; // Almacena la última posición de desplazamiento
let isHeaderVisible = true; // Indica si el header está visible
let hideTimeout; // Variable para almacenar el temporizador de ocultación

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Si está en la parte superior de la página
    if (currentScroll <= 0) {
        header.style.transform = "translateY(0)"; // Muestra el header
        isHeaderVisible = true; // El header está visible
        clearTimeout(hideTimeout); // Limpia el temporizador
    } else if (currentScroll > lastScrollTop && isHeaderVisible) {
        // Si se desplaza hacia abajo
        header.style.transform = "translateY(-100%)"; // Oculta el header
        isHeaderVisible = false; // El header ya no está visible
    } else if (currentScroll < lastScrollTop) {
        // Si se desplaza hacia arriba
        // Solo mostrar el header si ha desplazado más de 100px
        if (lastScrollTop - currentScroll > 100 && !isHeaderVisible) {
            header.style.transform = "translateY(0)"; // Muestra el header
            isHeaderVisible = true; // El header está visible

            // Reinicia el temporizador para ocultar el header después de 2 segundos
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                header.style.transform = "translateY(-100%)"; // Oculta el header después de 2 segundos
                isHeaderVisible = false; // El header ya no está visible
            }, 2000);
        }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});
