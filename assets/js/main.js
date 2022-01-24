"use strict";

var app = {
  chars: [
    "WordPress",
    "CSS",
    "HTML",
    "JavaScript",
    "React Js",
    "Rest APIs",
    "WooCommerce",
    "WP-CLI",
    "Design",
    "PHP"
  ],

  init: function () {
    app.container = document.createElement("div");
    app.container.className = "animation-container";
    document.getElementById("animation-container-main").appendChild(app.container); 
    window.setInterval(app.add, 100);
  },

  add: function () {
    var element = document.createElement("span");
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];
    var duration = Math.floor(Math.random() * 15) + 1;
    var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    var size = 10 + (15 - duration);
    element.style.cssText =
      "right:" +
      offset +
      "vw; font-size:" +
      size +
      "px;animation-duration:" +
      duration +
      "s";
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  }
};

document.addEventListener("DOMContentLoaded", app.init);

const burger = document.getElementById('burger');
const imchintesh_nav = document.getElementById('imchintesh_nav');
console.log(burger);
if(burger){
  burger.addEventListener('click', toggleNav);
}
function toggleNav() {
    console.log('clicked');
    if (burger.classList.contains('is-active')) {
        burger.classList.remove('is-active');
        imchintesh_nav.classList.remove('fixed');
    } else {
        burger.classList.add('is-active');
        imchintesh_nav.classList.add('fixed');
    }
}

jQuery('.main_header ul#primary-nav a').click(function() {
    burger.classList.remove('is-active');
    imchintesh_nav.classList.remove('fixed');
});

