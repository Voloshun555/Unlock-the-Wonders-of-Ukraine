import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

function initSliders() {
  const sliderContainers = document.querySelectorAll(".js-slider-container");

  let slidesCount = 1;
  let slidesOnTablet = 1;

  sliderContainers.forEach((container) => {
    const swiperEl = container.querySelector(".swiper") as HTMLElement;
    if (!swiperEl) return;
    const gallery = swiperEl.classList.contains("swiper-container-gallery");
    const reviews = swiperEl.classList.contains("swiper-container-reviews");
    const ourTours = swiperEl.classList.contains("swiper-container-tours");

    if (gallery) {
      slidesOnTablet = 2;
    }

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
        slidesPerView: slidesCount,
        spaceBetween: 20,
        breakpoints: {
          835: {
            slidesPerView: slidesOnTablet,
            spaceBetween: 16
          },
        },
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
