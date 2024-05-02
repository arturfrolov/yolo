import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

function slide() {
  // eslint-disable-next-line
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
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
    // Отзывчивые брейкпоинты
    breakpoints: {
      // когда ширина окна >= 576px
      576: {
        slidesPerView: 1,
      },
      // когда ширина окна >= 768px
      768: {
        slidesPerView: 1,
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
  });
}
export default slide;
