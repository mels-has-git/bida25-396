console.log("Sarona Adventures website loaded");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideDuration = 4000;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, slideDuration);