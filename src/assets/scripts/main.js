'use strict';

/* Whatsapp Buttons */
const wpMessage = () => {
  window.open("http://wa.me/573045758866");
};

/* Toggle Navigation */
const navMenu = document.querySelector("[data-nav]"),
      navToggle = document.querySelector("[data-nav-toggle]"),
      navLinks = document.querySelectorAll("[data-nav-link]");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open");
  })
}

navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open");
  })
})

/* Sticky Header */
const header = document.querySelector("[data-header]")

window.addEventListener("scroll", () => {
  if (header) {
    header.classList[window.scrollY > 10 ? "add" : "remove"]("is-sticky");
  }
})

/* Scroll Active Link */


/* Tour Card Show Info */
const tourCardsToggle = document.querySelectorAll("[data-info-toggle]"),
      infoCloseBtns = document.querySelectorAll("[data-tour-info-close]"),
      infoBookBtns = document.querySelectorAll("[data-tour-info-book]");

if(tourCardsToggle) {
  tourCardsToggle.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.parentElement.nextElementSibling.classList.add("is-open");
    });
  });
}

if(infoCloseBtns) {
  infoCloseBtns.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.classList.remove("is-open");
    });
  });
}

if(infoBookBtns) {
  infoBookBtns.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.classList.remove("is-open");
    });
  });
}

/* Load More Function */
const tourCardsContainer = document.getElementsByClassName(".tours__cards"),
      tourCards = document.querySelectorAll(".card__wrapper"),
      loadMoreBtn = document.getElementById("load-more"),
      cardLoad = 3;

tourCards.forEach((e, i) => {
  if (i > cardLoad - 1) e.classList.add("is-hidden");
  if (tourCards.length > 3) loadMoreBtn.style.display = "block";
});

loadMoreBtn.addEventListener("click", () => {
  [].forEach.call(document.querySelectorAll(".is-hidden"), (e, i) => {
    if (i < cardLoad) e.classList.remove("is-hidden");
    if (document.querySelectorAll("is-hidden").length === 0) loadMoreBtn.style.display = "none"
  });
});

/* Swiper Team */
let teamSlider = new Swiper(".team__container", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    688: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});