'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section = document.querySelector("#section--1");
const navLinks = document.querySelector(".nav__links");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav")
const allSections = document.querySelectorAll(".section");

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement("div");
message.classList.add('cookie-message');

message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
header.prepend(message);

document.querySelector(".btn--close-cookie").addEventListener("click", function(e) {
  e.preventDefault();
  message.remove()
})

message.style.background = "#37383d";
message.style.width = "100%";
message.style.height = "5em";

btnScrollTo.addEventListener("click", function(e) {
  section.scrollIntoView({behavior: "smooth"})
});

navLinks.addEventListener("click", function (e){
  e.preventDefault();
  if(e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView( {behavior: "smooth"} );
  }
});

tabsContainer.addEventListener("click", function(e){
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab");

  if(!clicked) return
    tabs.forEach(t => t.classList.remove("operations__tab--active"))
    tabsContent.forEach(c => c.classList.remove("operations__content--active"))
    clicked.classList.add("operations__tab--active")
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active")
});
const handleHover = function(e) {
    if(e.target.classList.contains("nav__link")){
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      const logo = link.closest(".nav").querySelector("img");
      siblings.forEach(el => {
        if(el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

const revealSection = function(entries, observer){
const [entry] = entries;
if(!entry.isIntersecting) return;
entry.target.classList.remove("section--hidden");
observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})
allSections.forEach(function(section){
  sectionObserver.observe(section)
  section.classList.add("section--hidden")
})
