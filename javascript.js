let currentSlide = 0;
let currentSlide2 = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slide')[0].classList.add('active');
});

function changeSlide2(direction) {
  const slides = document.querySelectorAll('.slide2');
  slides[currentSlide2].classList.remove('active2');
  currentSlide2 = (currentSlide2 + direction + slides.length) % slides.length;
  slides[currentSlide2].classList.add('active2');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slide2')[0].classList.add('active2');
});

  
  
  