"use strict";

// Declaring variables
const modal = document.querySelector(".modal");
const btnsOpen = document.querySelectorAll(".show-modal");
const btnClose = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//Declaring functions
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Selecting all of the buttons
for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener("click", openModal);
}

// Adding eventlistener to the variables
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Key pressing to close
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
