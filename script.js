document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const r_header = document.querySelector(".r_header");

  menu.addEventListener("click", () => {
    r_header.classList.toggle("active");
  });

  const slider = document.querySelector(".boats");
  const prevButton = document.querySelector(".prev__button");
  const nextButton = document.querySelector(".next__button");
  const slides = Array.from(slider.querySelectorAll(".re"));
  const slideCount = slides.length;
  let slideIndex = 0;

  prevButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });

    updateSlider();
  }
});
