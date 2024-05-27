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

// Anurag's Code
const animation_from_left_elements = document.querySelectorAll(".hero-content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__backInLeft");
      } else {
        setTimeout(() => {
          entry.target.classList.remove(
            "animate__animated",
            "animate__backInLeft"
          );
        }, 1000);
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
const animation_slide_left = document.querySelectorAll(".animation-slide-left");

const observerSlideLeft = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__backInLeft");
      } else {
        setTimeout(() => {
          entry.target.classList.remove(
            "animate__animated",
            "animate__backInLeft"
          );
        }, 1000);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

animation_slide_left.forEach((el) => {
  observerSlideLeft.observe(el);
});

// Service card animation
const serviceCards = document.querySelectorAll(".service-card");

const isMobile = window.matchMedia("(max-width: 768px)"); // Adjust the breakpoint as needed

const observerCard = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__slideInLeft");
      } else {
        setTimeout(() => {
          entry.target.classList.remove(
            "animate__animated",
            "animate__slideInLeft"
          );
        }, 1000); // Adjust the delay as necessary
      }
    });
  },
  {
    threshold: 0.7,
  }
);

function checkAndObserve() {
  if (isMobile.matches) {
    serviceCards.forEach((el) => {
      observerCard.observe(el);
    });
  } else {
    serviceCards.forEach((el) => {
      observerCard.unobserve(el);
      el.classList.remove("animate__animated", "animate__slideInLeft"); // Ensure to remove classes when exiting mobile view
    });
  }
}

// Check and observe initially
checkAndObserve();

// Add listener for viewport size changes
isMobile.addListener(checkAndObserve);

// var video = videojs("my-video1", "my-video2", "my-viedo3");

// video.on("pause", function () {
//   this.bigPlayButton.show();

//   // Now the issue is that we need to hide it again if we start playing
//   // So every time we do this, we can create a one-time listener for play events.
//   video.one("play", function () {
//     this.bigPlayButton.hide();
//   });
// });

// Anurag's Code end
