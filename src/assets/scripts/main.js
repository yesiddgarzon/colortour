'use strict';

/**
 * Mobile navigation toggle
 */
const navMenu = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const ctaBtnNav = document.querySelector(".nav__item .btn")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-active");
    navToggle.classList.toggle("is-active");
    ctaBtnNav.classList.add("btn--accent");
  });
}

navLinks.forEach(element => {
  element.addEventListener("click", () => {
    navMenu.classList.toggle("is-active");
    navToggle.classList.toggle("is-active");
  });
});

/**
 * Sticky header
 */
const header = document.querySelector("[data-header]");
const ctaBtn = document.querySelector(".header .btn")

window.addEventListener("scroll", () => {
  if (header && ctaBtn) {
    header.classList[window.scrollY > 70 ? "add" : "remove"]("is-active");
    ctaBtn.classList[window.scrollY > 70 ? "add" : "remove"]("btn--accent");
  }
});

/**
 * Scroll sections active link
 */
const sections = document.querySelectorAll("section[id]");

const navLinkActive = () => {
  let scrollY = window.pageYOffset;

  sections.forEach(element => {
    const sectionHeight = element.offsetHeight,
          sectionTop = element.offsetTop - 70,
          sectionId = element.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__item a[href*=" + sectionId + "]").classList.add("is-active")
    } else {
      document.querySelector(".nav__item a[href*=" + sectionId + "]").classList.remove("is-active")
    }
  });
}

window.addEventListener("scroll", navLinkActive);

/**
 * Team Slider
 */
const teamSlider = new Swiper(".team__slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  slidesPerGroup: 3,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
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

/**
 * Testimonials Slider
 */
const testimonialsSwiper = new Swiper(".testimonials__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**
 * Tour card show info
 */
const tourCardsToggle = document.querySelectorAll('[data-info-toggle]');
const infoCloseBtns = document.querySelectorAll('[data-info-close-btn]');
const infoBookBtns = document.querySelectorAll('[data-info-book-btn]');

if (tourCardsToggle) {
  tourCardsToggle.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.classList.add("is-active");
      e.parentElement.parentElement.nextElementSibling.classList.add("is-active");
    });
  });
}

if (infoCloseBtns) {
  infoCloseBtns.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.classList.remove("is-active");
    });
  });
}

if (infoBookBtns) {
  infoBookBtns.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.classList.remove("is-active");
      window.open("https://api.whatsapp.com/send/?phone=573045758866&text&type=phone_number&app_absent=0");
    });
  });
}

/**
 * Tour load more function
 */
const tourCardContainer = document.getElementById("tour-cards"),
      tourCards = document.querySelectorAll(".tour__card"),
      loadMoreBtn = document.getElementById("load-more"),
      cardLoad = 3;

console.log();

tourCards.forEach((e, i) => {
  if (i > cardLoad - 1) e.classList.add("is-hidden");
  if (tourCards.length > 3) loadMoreBtn.style.display = "block";
});

loadMoreBtn.addEventListener("click", () => {
  [].forEach.call(document.querySelectorAll(".is-hidden"), (e, i) => {
    if (i < cardLoad) e.classList.remove("is-hidden");
    if (document.querySelectorAll(".is-hidden").length === 0) loadMoreBtn.style.display = "none";
  });
});
