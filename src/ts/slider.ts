import Swiper from "swiper";
import { Navigation } from "swiper/modules"; 
import "swiper/css";


const swiper = new Swiper(".swiper", {
  modules: [ Navigation], 
  direction: "horizontal",
  loop: false,
  
  slidesPerView: "auto", 
  spaceBetween: 20,
  centeredSlides: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});