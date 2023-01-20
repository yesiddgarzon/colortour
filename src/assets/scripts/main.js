'use strict';

/* Whatsapp Buttons */
const wpMessage = () => {
  window.open("http://wa.me/573045758866");
};

/* Toggle Navigation */
const navMenu = document.querySelector('[data-nav]'),
      navToggle = document.querySelector('[data-nav-toggle]'),
      navLinks = document.querySelectorAll('[data-nav-link]'),
      navBtn = document.querySelector('.nav__item .btn');
      
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-open');
    navBtn.classList.add('btn--accent');
  });
}

navLinks.forEach((e) => {
  e.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-open');
  });
});

/* Sticky Header */
const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  if (header) {
    header.classList[window.scrollY > 20 ? "add" : "remove"]("is-sticky");
    navBtn.classList[window.scrollY > 20 ? "add" : "remove"]("btn--accent");
  };
});

/* Scroll Active Link */
const sections = document.querySelectorAll("section[id]");

const navLinkActive = () => {
  let scrollY = window.pageYOffset;

  sections.forEach(element => {
    const sectionHeight = element.offsetHeight,
          sectionTop = element.offsetTop - 40,
          sectionId = element.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__item a[href*=" + sectionId + "]").classList.add("is-active");
    } else {
      document.querySelector(".nav__item a[href*=" + sectionId + "]").classList.remove("is-active");
    }
  });
}

window.addEventListener("scroll", navLinkActive);

/* Tour Card Show Info */
const tourCardsToggle = document.querySelectorAll('[data-info-toggle]');
const infoCloseBtns = document.querySelectorAll('[data-info-close-btn]');
const infoBookBtns = document.querySelectorAll('[data-info-book-btn]');

if (tourCardsToggle) {
  tourCardsToggle.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.nextElementSibling.classList.add("is-open");
    });
  });
}

if (infoCloseBtns) {
  infoCloseBtns.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.classList.remove("is-open");
    });
  });
}

if (infoBookBtns) {
  infoBookBtns.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.classList.remove("is-open");
      wpMessage();
    });
  });
}

/* Load More Function */
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