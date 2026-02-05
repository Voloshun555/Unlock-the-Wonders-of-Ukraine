const listGallery = document.querySelector(".list-gallery");
import { dataGallery } from "./data-gallery";

function renderGallery() {
  return dataGallery
    .map(({ img, img2x, alt }) => {
      return `<li class="swiper-slide item-gallery">
        <picture>
          <source srcset="${img} 1x, ${img2x} 2x" />
          <img src="${img}" alt="${alt}" class="img-gallery"/>
        </picture>
      </li>`;
    })
    .join("");
}

if (listGallery) {
  listGallery.insertAdjacentHTML("beforeend", renderGallery());
} else {
  console.log("lkfjb hnsl");
}
