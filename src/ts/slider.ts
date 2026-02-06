import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

function initSliders() {
  const sliderContainers = document.querySelectorAll(".js-slider-container");

  sliderContainers.forEach((container) => {
    const swiperEl = container.querySelector(".swiper") as HTMLElement;
    const nextBtn = container.querySelector(
      ".swiper-button-next",
    ) as HTMLButtonElement;
    const prevBtn = container.querySelector(
      ".swiper-button-prev",
    ) as HTMLButtonElement;

    if (swiperEl) {
      new Swiper(swiperEl, {
        modules: [Navigation, Pagination],
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },

        observer: true,
        observeParents: true,
      });
    }
  });
}

initSliders();
