// import Swiper, {Navigation, Pagination} from 'swiper'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const programs = new Swiper('.programs__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  navigation: {
    nextEl: '.programs__btn-next',
    prevEl: '.programs__btn-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    }
  }
})