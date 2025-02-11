const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const openText = document.querySelector("#open-text");
const closeText = document.querySelector("#close-text");
const noScrollBody = document.querySelector("body");
const opacityMain = document.querySelector("main");

openText.classList.remove("hidden");

const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  openText.classList.remove("hidden");

  if (navMenu.classList.contains("active")) {
    closeText.classList.remove("hidden");
    openText.classList.add("hidden");

    noScrollBody.style.overflow = "hidden";
    opacityMain.style.opacity = 0.5;

  } else {
    closeText.classList.add("hidden");
    noScrollBody.style.overflow = "";
    opacityMain.style.opacity = 1;
  }
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  openText.classList.add("hidden");
  closeText.classList.add("hidden");
  noScrollBody.style.overflow = "";
}



