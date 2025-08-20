document.addEventListener("DOMContentLoaded", function () {
  // Находим главный контейнер селекта
  const customSelect = document.querySelector(".custom-select");
  // Находим элементы внутри этого контейнера
  const selected = customSelect.querySelector(".select-selected");
  const items = customSelect.querySelector(".select-items");
  const options = customSelect.querySelectorAll(".select-items div");

  // 1. Открытие/закрытие списка по клику на выбранный элемент
  selected.addEventListener("click", function (event) {
    // Останавливаем "всплытие" события, чтобы клик не передался документу
    event.stopPropagation();
    items.classList.toggle("select-hide");
  });

  // 2. Выбор элемента из списка
  options.forEach((option) => {
    option.addEventListener("click", function () {
      // Устанавливаем текст выбранной опции в главный элемент
      // .firstChild.nodeValue меняет только текст, не трогая картинку (стрелку)
      selected.firstChild.nodeValue = this.textContent;

      // Закрываем список
      items.classList.add("select-hide");
    });
  });

  // 3. Закрытие списка по клику вне его
  document.addEventListener("click", function () {
    // Если список открыт, мы его закрываем
    if (!items.classList.contains("select-hide")) {
      items.classList.add("select-hide");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Находим все элементы с классом 'color-swatch'
  const colorSwatches = document.querySelectorAll(".color-swatch");

  // Функция для обработки клика
  function handleColorSwitch(event) {
    // Сначала убираем класс 'active' у всех кружков
    colorSwatches.forEach((swatch) => {
      swatch.classList.remove("active");
    });

    // Затем добавляем класс 'active' только тому кружку, по которому кликнули
    event.currentTarget.classList.add("active");
  }

  // Добавляем обработчик клика на каждый кружок
  colorSwatches.forEach((swatch) => {
    swatch.addEventListener("click", handleColorSwitch);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      const content = item.querySelector(".accordion-content");
      const isActive = item.classList.contains("active");

      // Можно добавить логику, чтобы закрывать все остальные открытые вкладки
      // accordionItems.forEach(i => {
      //   i.classList.remove('active');
      //   i.querySelector('.accordion-content').style.maxHeight = null;
      // });

      if (!isActive) {
        item.classList.add("active");
        // Устанавливаем max-height равным реальной высоте контента
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        content.style.maxHeight = null;
      }
    });
  });
});

// Инициализация слайдера с превью (thumbnails)
var thumbsSwiper = new Swiper(".swiper-thumbs", {
  direction: "vertical",
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    767: {
      direction: "vertical",
      slidesPerView: 3,
    },
    0: {
      direction: "horizontal",
      slidesPerView: 3,
    },
  },
});

// Инициализация основного слайдера
var mainSwiper = new Swiper(".swiper-main", {
  spaceBetween: 10,
  thumbs: {
    swiper: thumbsSwiper,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const moreProductsSwiper = new Swiper(".swiper-more_products_cont", {
    slidesPerView: 4,
    spaceBetween: 14,
    loop: false,
    breakpoints: {
      1089: {
        slidesPerView: 4,
      },
      877: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1.2,
      },
    },
  });
});
