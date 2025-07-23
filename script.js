const hamburger = document.querySelector(".header__hamburger");
const responsiveHeader = document.querySelector(".responsive-header");
const closeMenu = document.querySelector("#close-menu");
const scrollToTop = document.querySelector(".scroll-to-top");

hamburger.addEventListener("click", () => {
  responsiveHeader.classList.add("show-menu");
});

closeMenu.addEventListener("click", () => {
  responsiveHeader.classList.remove("show-menu");
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let lastScrollY = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  console.log("lastScrollY", lastScrollY);
  console.log("window.scrollY", window.scrollY);
  if (!header) return;
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    // Scrolling down
    header.classList.add("header--hidden");
  } else {
    // Scrolling up
    header.classList.remove("header--hidden");
  }
  lastScrollY = window.scrollY;
});
