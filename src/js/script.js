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
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  sections.forEach(element => {
    const sectionHeight = element.offsetHeight,
          sectionTop = element.offsetTop - 150,
          sectionId = element.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__item a[href*=" + sectionId + "]").classList.add("is-active");
    } else {
      document.querySelector(".nav__item a[href*=" + sectionId + "]").classList.remove("is-active");
    }
  });

});


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
const tourCardsContainer = document.getElementsByClassName(".tours__wrapper"),
      tourCards = document.querySelectorAll(".tour__card"),
      loadMoreBtn = document.getElementById("load-more");
let cardLoad = window.innerWidth > 1024 ? 3 : 2;

tourCards.forEach((e, i) => {
  if (i > cardLoad - 1) e.classList.add("is-hidden");
  if (tourCards.length > 2) loadMoreBtn.style.display = "block";
});

loadMoreBtn.addEventListener("click", () => {
  [].forEach.call(document.querySelectorAll(".is-hidden"), (e, i) => {
    if (i < cardLoad + 1) e.classList.remove("is-hidden");
    if (document.querySelectorAll("is-hidden").length === 0) loadMoreBtn.style.display = "none"
  });
});


/* Home Carousel */
const homeCarousel = new Swiper(".home__carousel", {
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Team Slider */
const teamSlider = new Swiper('.cards__content', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    668: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});