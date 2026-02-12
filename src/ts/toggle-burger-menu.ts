const burgerBtn = document.querySelector(
  ".btn__burger-menu",
) as HTMLButtonElement | null;
const iconOpen = document.querySelector(
  ".open-burger-menu",
) as HTMLElement | null;
const iconClose = document.querySelector(
  ".close-burger-menu",
) as HTMLElement | null;
const burgerMenu = document.querySelector(".burger-menu") as HTMLElement | null;
const body = document.body;

function toggleBurgerMenu(): void {
  burgerMenu?.classList.toggle("is-open");
  iconOpen?.classList.toggle("is-hidden");
  iconClose?.classList.toggle("is-hidden");
  body.classList.toggle("modal-open");
}

burgerBtn?.addEventListener("click", toggleBurgerMenu);

window.addEventListener("resize", () => {
  if (window.innerWidth > 834) {
    burgerMenu?.classList.remove("is-open");
    iconOpen?.classList.remove("is-hidden");
    iconClose?.classList.add("is-hidden");
    body.classList.remove("modal-open");
  }
});
