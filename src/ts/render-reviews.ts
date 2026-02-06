import { dataReviews } from "./data-reviews";
const listReviews = document.querySelector(".wrapper-reviews");

function renderReviews() {
  return dataReviews
    .map(({ name, text, img, imgX2, star }) => {
      const starRender = (star: number) => {
        const maxStars = 5;

        return Array.from({ length: maxStars }, (_, index) => {
          const activeClass = index < star ? "is-active" : "";

          return `
      <li class="item-icon-star ${activeClass}">
        <svg>
          <use href="./src/assets/svg/symbol-defs.svg#icon-Star"></use>
        </svg>
      </li>
    `;
        }).join("");
      };
      return `
       <article class="swiper-slide review-card ">
      <div class="wrapper-info-person">
        <img src="${img}" alt="${name}" />

        <div class="name-person">
          <h3 class="title-name-person">${name}</h3>

          <ul class="list-icon-stars" aria-label="5 star rating">
           ${starRender(star)}
          </ul>
        </div>
      </div>

      <p class="text-reviews">
       ${text}
      </p>
    </article>
    `;
    })
    .join("");
}

if (listReviews) {
  listReviews.insertAdjacentHTML("beforeend", renderReviews());
}
