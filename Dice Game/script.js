"use strict";

// Selecting and Declaring elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const scoreP0 = document.querySelector("#score--0");
const scoreP1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starter Values
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreP0.textContent = 0;
  scoreP1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.classList.add("hidden");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  player0.classList.add("player--active");
};
init();

// Switch
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// Rolling Dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    const diceNumber = Math.floor(Math.random() * 6 + 1);
    dice.classList.remove("hidden");
    dice.src = `dice-${diceNumber}.png`;
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

const username0 = [];
const username1 = [];

document.querySelector(".player--0").addEventListener("click", (e) => {
  const getUsername0 = JSON.parse(localStorage.getItem("username0"));
  if (getUsername0) {
    e.target.closest(".name")[
      "outerHTML"
    ] = `<input class="edit-username0" type="text" value=${getUsername0}><input class="edit-btn0" type="submit" />`;
  } else {
    e.target.closest(".name")[
      "outerHTML"
    ] = `<input class="edit-username0" type="text" value="PLAYER 1"/><input class="edit-btn0" type="submit" />`;
  }

  if (document.querySelector(".edit-btn0")) {
    document.querySelector(".edit-btn0").addEventListener("click", () => {
      username0.push(document.querySelector(".edit-username0").value);
      localStorage.setItem("username0", JSON.stringify(username0));
      if (username0[0].length === 0) {
        document.querySelector(".edit-username0")[
          "outerHTML"
        ] = `<h2 class="name" id="name--0">{getUsername0}</h2>`;
        document.querySelector(".edit-btn0").remove();
      } else {
        const getUsername0 = JSON.parse(localStorage.getItem("username0"));

        document.querySelector(".edit-username0")[
          "outerHTML"
        ] = `<h2 class="name" id="name--0">${getUsername0[0]}</h2>`;
        document.querySelector(".edit-btn0").remove();
      }
    });
  }
});

document.querySelector(".player--1").addEventListener("click", (e) => {
  const getUsername1 = JSON.parse(localStorage.getItem("username1"));
  if (getUsername1) {
    e.target.closest(".name")[
      "outerHTML"
    ] = `<input class="edit-username1" type="text" value=${getUsername1} ><input class="edit-btn1" type="submit" />`;
  } else {
    e.target.closest(".name")[
      "outerHTML"
    ] = `<input class="edit-username1" type="text" value="PLAYER 2"/><input class="edit-btn1" type="submit" />`;
  }

  if (document.querySelector(".edit-btn1")) {
    document.querySelector(".edit-btn1").addEventListener("click", () => {
      username1.push(document.querySelector(".edit-username1").value);
      localStorage.setItem("username1", JSON.stringify(username1));
      if (username1[0].length === 0) {
        document.querySelector(".edit-username1")[
          "outerHTML"
        ] = `<h2 class="name" id="name--1">{getUsername1}</h2>`;
        document.querySelector(".edit-btn1").remove();
      } else {
        const getUsername1 = JSON.parse(localStorage.getItem("username1"));

        document.querySelector(".edit-username1")[
          "outerHTML"
        ] = `<h2 class="name" id="name--1">${getUsername1[0]}</h2>`;
        document.querySelector(".edit-btn1").remove();
      }
    });
  }
});

window.addEventListener("load", (event) => {
  const getUsername0 = JSON.parse(localStorage.getItem("username0"));
  if (!getUsername0) {
    document
      .querySelector(".player--0")
      .insertAdjacentHTML(
        "afterbegin",
        '<h2 class="name" id="name--0">Player 1</h2>'
      );
  } else {
    const getUsername0 = JSON.parse(localStorage.getItem("username0"));
    document
      .querySelector(".player--0")
      .insertAdjacentHTML(
        "afterbegin",
        `<h2 class="name" id="name--0">${getUsername0}</h2>`
      );
  }
});

window.addEventListener("load", (event) => {
  const getUsername1 = JSON.parse(localStorage.getItem("username1"));
  if (!getUsername1) {
    document
      .querySelector(".player--1")
      .insertAdjacentHTML(
        "afterbegin",
        '<h2 class="name" id="name--1">Player 2</h2>'
      );
  } else {
    const getUsername1 = JSON.parse(localStorage.getItem("username1"));
    document
      .querySelector(".player--1")
      .insertAdjacentHTML(
        "afterbegin",
        `<h2 class="name" id="name--1">${getUsername1}</h2>`
      );
  }
});
