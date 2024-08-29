"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) {
  navElemArr.push(navbarLinks[i]);
}

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// Toggle dropdown on click for mobile
const dropdownToggle = document.querySelectorAll(".navbar-item.dropdown");

dropdownToggle.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default navigation behavior
    this.parentElement.classList.toggle("active"); // Toggle the active class
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
});

// Anurag's Code
const animation_from_left_elements = document.querySelectorAll(".hero-content");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate__animated",
          "animate__bounceInDown"
        );
        // Stop observing once the animation has been triggered
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

animation_from_left_elements.forEach((el) => {
  observer.observe(el);
});

// Slide in from left
const animation_slide_left = document.querySelector(".animation-slide-left");
const animation_slide_right = document.querySelector(".animation-slide-right");

const observerSlideLeft = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        // Stop observing once the animation has been triggered
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observerSlideLeft.observe(animation_slide_left);
observerSlideLeft.observe(animation_slide_right);
