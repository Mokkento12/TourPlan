const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
});
const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});
// Добавляем обработчик события keyup для переключения слайдеров с помощью клавиатуры
document.addEventListener("keyup", function (event) {
  // Проверяем, нажата ли клавиша стрелка влево
  if (event.key === "ArrowLeft") {
    // Проверяем, активен ли слайдер отзывов
    if (document.activeElement.classList.contains("reviews-slider")) {
      // Если активен слайдер отзывов, переключаем его на предыдущий слайд
      reviewsSlider.slidePrev();
    } else {
      // Если активен слайдер отелей, переключаем его на предыдущий слайд
      hotelSlider.slidePrev();
    }
  }
  // Проверяем, нажата ли клавиша стрелка вправо
  else if (event.key === "ArrowRight") {
    // Проверяем, активен ли слайдер отзывов
    if (document.activeElement.classList.contains("reviews-slider")) {
      // Если активен слайдер отзывов, переключаем его на следующий слайд
      reviewsSlider.slideNext();
    } else {
      // Если активен слайдер отелей, переключаем его на следующий слайд
      hotelSlider.slideNext();
    }
  }
});

let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
