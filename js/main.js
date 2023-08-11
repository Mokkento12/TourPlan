$(document).ready(function () {
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

  document.addEventListener("keyup", function (event) {
    // Проверяем, нажата ли клавиша стрелка влево
    if (event.key === "ArrowLeft") {
      // Переключаем верхний слайдер на предыдущий слайд
      hotelSlider.slidePrev();
    }
    // Проверяем, нажата ли клавиша стрелка вправо
    else if (event.key === "ArrowRight") {
      // Переключаем верхний слайдер на следующий слайд
      hotelSlider.slideNext();
    }
  });

  let menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    let targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка формы

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Введите ваше имя",
          minlength: "Имя должно быть не менее 2 символов",
        },
        email: {
          required: "Введите адрес электронной почты",
          email: "Неверный формат e-mail",
        },
        phone: {
          required: "Введите номер телефона",
        },
      },
    });
  });
  AOS.init();
});
