$(document).ready(function () {
  $("#autoWidth, #autoWidth2").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth, #autoWidth2").removeClass("cS-hidden");
    },
  });
});

const hamburger = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".menu-mobile");

hamburger.addEventListener("click", () => {
  menuMobile.classList.toggle("toggle");
});
