const burgerBtn = document.querySelector(".btn__burger-menu");
const iconOpen = document.querySelector(".open-burger-menu");
const iconClose = document.querySelector(".close-burger-menu");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.body;

function toggleBurgerMenu(): void {
  burgerMenu?.classList.toggle("is-open");
  iconOpen?.classList.toggle("is-hidden");
  iconClose?.classList.toggle("is-hidden");
  body.classList.toggle("modal-open")
}

burgerBtn?.addEventListener("click", toggleBurgerMenu);
