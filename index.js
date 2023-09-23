let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides(); 