"use strict";

var toggleMenu = document.getElementById("toggle-menu"),
    header = document.getElementById("header"),
    menu = document.querySelector('.header__menu'),
    bannerAlto = document.getElementById("banner").clientHeight;

var openMenu = function openMenu(e) {
  e.preventDefault();
  var icon = e.target;

  if (icon.className === "fa fa-bars") {
    icon.classList.remove("fa", "fa-bars");
    icon.classList.add("fa", "fa-times");
  } else {
    icon.classList.remove("fa", "fa-times");
    icon.classList.add("fa", "fa-bars");
  }

  menu.classList.toggle('active-menu');
};

// Slider testimonials
var testimoalsSlider = tns({
  container: '.testimonials-slider',
  items: 1,
  slideBy: 'page',
  responsive: {
    "992": {
      "items": 1
    },
    "1200": {
      "items": 1
    }
  }
});

var partnerSlider = tns({
  container: '.partners-slider',
  items: 2,
  slideBy: 'page',
  mouseDrag: true,
  responsive: {
    "768": {
      items: 3
    },
    "992": {
      items: 4
    },
    "1200": {
      items: 4
    }
  }
});

toggleMenu.addEventListener("click", openMenu);

window.onscroll = function () {

  window.pageYOffset > bannerAlto ? header.classList.add("active") : header.classList.remove("active");
};