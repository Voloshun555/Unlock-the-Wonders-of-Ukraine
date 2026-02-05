import { dataOurTours } from "./data-our-tours";

const listOurTours = document.querySelector(".list-our-tours");

function renderOurTours() {
  return dataOurTours
    .map((item) => {
      const { image, image2, title, info } = item;
      const characteristic = info
        .map((el) => `<li class="characteristic-item"> ${el} </li>`)
        .join("");

      return `
        <li class="our-tours-item swiper-slide">
          <picture>
            <source 
              media="(max-width: 767px)" 
              srcset="${image} 1x, ${image2} 2x"
            >
            <img
              src="${image}"
              alt="${title}"
              loading="lazy"
              class="img-tours"
            />
          </picture>
<div class="wrapper-tours">
<h3 class="title-tours">${title}</h3>
          <ul class="characteristic-list">
            ${characteristic}
          </ul>

          <div class="included-section">
            <p class="text-include">Included:</p>
            <ul class="included-list">
              <li class="included-item"> 
                <svg class="included-icon">
                  <use href="./src/assets/svg/symbol-defs.svg#icon-bus"></use>
                </svg>
                <p>Transfer</p>
              </li>
              <li class="included-item"> 
                <svg class="included-icon">
                  <use href="./src/assets/svg/symbol-defs.svg#icon-id-card"></use>
                </svg>
                 <p>Travel insurance</p>
              </li>
              <li class="included-item"> 
                <svg class="included-icon">
                  <use href="./src/assets/svg/symbol-defs.svg#icon-face"></use>
                </svg>
                 <p>Professional guide</p>
              </li>
              <li class="included-item"> 
                <svg class="included-icon">
                  <use href="./src/assets/svg/symbol-defs.svg#icon-ticket"></use>
                </svg>
                 <p>Travel insurance</p>
              </li>
            </ul>
            </div>
            <button class="btn-tours-book">Book</button></div>
        </li>
      `;
    })
    .join("");
}
if (listOurTours) {
  listOurTours.insertAdjacentHTML("beforeend", renderOurTours());
}
