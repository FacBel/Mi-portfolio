document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('.project-slider');

    sliders.forEach(slider => {
        const slides = Array.from(slider.querySelectorAll('.slide'));
        if (slides.length <= 1) return; // Si hay 1 o 0 imágenes, no hacemos carrusel

        let currentSlide = 0;

        // Crear contenedor de miniaturas
        const thumbContainer = document.createElement('div');
        thumbContainer.classList.add('thumbnails-container');
        slider.appendChild(thumbContainer); // Se agrega debajo de slider-wrapper

        slides.forEach((slide, index) => {
            const thumbDiv = document.createElement('div');
            thumbDiv.classList.add('thumbnail-wrapper');
            
            const thumbImg = document.createElement('img');
            thumbImg.src = slide.src;
            thumbImg.classList.add('thumbnail');
            
            if (index === 0) thumbDiv.classList.add('active');
            
            thumbDiv.appendChild(thumbImg);
            
            thumbDiv.addEventListener('click', () => {
                goToSlide(index);
            });
            
            thumbContainer.appendChild(thumbDiv);
        });

        const thumbnails = thumbContainer.querySelectorAll('.thumbnail-wrapper');

        const goToSlide = (index) => {
            slides[currentSlide].classList.remove('active');
            thumbnails[currentSlide].classList.remove('active');
            
            currentSlide = index;
            
            slides[currentSlide].classList.add('active');
            thumbnails[currentSlide].classList.add('active');
        };
    });

    // Email Copy Logic
    const copyEmailBtn = document.getElementById('copy-email');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'martinbellandi2000@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                alert(`¡Email copiado al portapapeles!\n${email}`);
            }).catch(err => {
                console.error('Error al copiar: ', err);
                alert(`Mi email es: ${email}`);
            });
        });
    }
});
