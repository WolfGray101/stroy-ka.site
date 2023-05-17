const modalMenu = document.querySelector(".modal");
const burger = document.querySelector(".burger-container");
const closeBtn = document.querySelector(".close");
const main = document.querySelector("main");
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')

burger.addEventListener("click", () => {
  // const height = modalMenu.offsetHeight;
  modalMenu.classList.add("modal-menu__open");
  closeBtn.classList.add('close__open')
  // main.style.height = `${height}px`;
  // main.classList.add('main__open');
});

const removeClassList = () => {
  modalMenu.classList.remove("modal-menu__open");
  // main.style.height = `auto`;
  closeBtn.classList.remove('close__open')
  // main.classList.remove('main__open');

}
closeBtn.addEventListener("click", () => {
  removeClassList()
});
mobileMenuBtn.addEventListener("click", () => {
  removeClassList()
});