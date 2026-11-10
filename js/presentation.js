(() => {
  const slides = Array.from(document.querySelectorAll("[data-slide]"));
  const prevButton = document.querySelector('[data-action="prev"]');
  const nextButton = document.querySelector('[data-action="next"]');
  const counter = document.querySelector("[data-counter]");

  if (!slides.length || !prevButton || !nextButton || !counter) {
    return;
  }

  let currentIndex = 0;

  const update = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === currentIndex);
    });

    counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
  };

  prevButton.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    update();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = Math.min(slides.length - 1, currentIndex + 1);
    update();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      currentIndex = Math.max(0, currentIndex - 1);
      update();
    }

    if (event.key === "ArrowRight") {
      currentIndex = Math.min(slides.length - 1, currentIndex + 1);
      update();
    }
  });

  update();
})();
