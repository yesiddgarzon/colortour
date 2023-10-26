/* Toggle Language Menu */
const languageMenu = document.querySelector(".lang-menu");

if (languageMenu) {
  languageMenu.addEventListener("click", () => {
    languageMenu.classList.toggle("is-open");
  })
}

/* Toggle Navigation */
const navMenu = document.querySelector("[data-nav]"),
      navOpen = document.querySelector("[data-nav-open]"),
      navClose = document.querySelector("[data-nav-close]"),
      navLinks = document.querySelectorAll("[data-nav-link]");

if (navOpen) {
  navOpen.addEventListener("click", () => {
    navMenu.classList.add("is-open");
  })
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
  })
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
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

/* Read More Tour Card Action */
const tourInfoToggle = document.querySelectorAll("[data-tour-info-toggle]");

if (tourInfoToggle) {
  tourInfoToggle.forEach(e => {
    e.addEventListener("click", () => {
      e.previousSibling.classList.toggle("is-open");

      console.log(document.documentElement.lang);

      if (document.documentElement.lang == "es") {
        e.previousSibling.classList.contains("is-open") ? e.innerHTML = "Mostrar menos" : e.innerHTML = "Conoce más..."
      } else {
        e.previousSibling.classList.contains("is-open") ? e.innerHTML = "Show less" : e.innerHTML = "Read more..."
      }
    });
  });
}

/* Load More Tours Button */
const tourCardsContainer = document.getElementsByClassName(".tours__wrapper"),
      tourCards = document.querySelectorAll(".tour__card"),
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

/* Team Swiper */
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