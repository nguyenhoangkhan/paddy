const toggleMenuMobile = document.querySelector(".toggle-menu-mobile");
const headerMobile = document.querySelector(".header.mobile");

toggleMenuMobile.addEventListener("click", function () {
  this.classList.toggle("active");
  if (toggleMenuMobile.classList.contains("active")) {
    document.querySelector(".mobile-menu").classList.add("active");
    document.querySelector(
      ".mobile-menu"
    ).style.top = `${headerMobile.clientHeight}px`;
  } else {
    document.querySelector(".mobile-menu").classList.remove("active");
  }
});
