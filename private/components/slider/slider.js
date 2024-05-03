import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

function slide() {
  // eslint-disable-next-line
  const swiper = new Swiper('.mySwiper-header', {
    modules: [Navigation, Pagination],
    // slidesPerView: 2,
    slidesPerView: 'auto',
    spaceBetween: 16,
    // centeredSlides: true,
    speed: 800,
    direction: 'horizontal',
    loop: true,
    // Включение управления свайпом
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // simulateTouch: false,
    touchStartPreventDefault: false,
    // Отзывчивые брейкпоинты
    breakpoints: {
      // когда ширина окна >= 576px
      576: {
        // slidesPerView: 2,
        slidesPerView: 'auto',
      },
      // когда ширина окна >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    },
    on: {
      // eslint-disable-next-line
      touchStart: function () {
        if ($('.select2-container--open').length) {
          $('.custom-select').select2('close'); // Закрывает все Select2 при начале свайпа
        }
      },
    },
  });

  // eslint-disable-next-line
  const swiperImpressions1 = new Swiper('.mySwiper-impressions1', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 800,
    direction: 'horizontal',
    loop: true,
    touchStartPreventDefault: false,
    // Отзывчивые брейкпоинты
    breakpoints: {
      // когда ширина окна >= 576px
      576: {
        // slidesPerView: 2,
        slidesPerView: 'auto',
      },
      // когда ширина окна >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
    on: {
      // eslint-disable-next-line
      touchStart: function () {
        if ($('.select2-container--open').length) {
          $('.custom-select').select2('close'); // Закрывает все Select2 при начале свайпа
        }
      },
    },
  });
  // eslint-disable-next-line
  const swiperImpressions2 = new Swiper('.mySwiper-impressions2', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 800,
    direction: 'horizontal',
    loop: true,
    touchStartPreventDefault: false,
    // Отзывчивые брейкпоинты
    breakpoints: {
      // когда ширина окна >= 576px
      576: {
        slidesPerView: 'auto',
      },
      // когда ширина окна >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
    on: {
      // eslint-disable-next-line
      touchStart: function () {
        if ($('.select2-container--open').length) {
          $('.custom-select').select2('close'); // Закрывает все Select2 при начале свайпа
        }
      },
    },
  });

  // eslint-disable-next-line
  const swiperReview = new Swiper('.mySwiper-reviews', {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 800,
    direction: 'horizontal',
    loop: true,
    touchStartPreventDefault: false,
    // Отзывчивые брейкпоинты
    breakpoints: {
      // когда ширина окна >= 576px
      576: {
        slidesPerView: 'auto',
      },
      // когда ширина окна >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
    on: {
      // eslint-disable-next-line
      touchStart: function () {
        if ($('.select2-container--open').length) {
          $('.custom-select').select2('close'); // Закрывает все Select2 при начале свайпа
        }
      },
    },
  });
}
export default slide;
