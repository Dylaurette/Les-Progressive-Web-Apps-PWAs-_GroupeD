document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.banner-slider .slide');
    let currentSlide = 0;
  
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000); // Changement d'image toutes les 5 secondes
  });
  