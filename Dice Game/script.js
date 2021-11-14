'use strict';

// Selecting and Declaring elements
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
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

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    scoreP0.textContent = 0;
    scoreP1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    dice.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner")
    player0.classList.add("player--active")
}
init()

// Switch
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active")
    player1.classList.toggle("player--active")
}

// Rolling Dice
btnRoll.addEventListener("click", function(){
    if (playing) {
        const diceNumber = Math.floor((Math.random() * 6) + 1);
        dice.classList.remove("hidden");
        dice.src = `dice-${diceNumber}.png`
        if (diceNumber !== 1){
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
           switchPlayer()
        }
    }
});

btnHold.addEventListener("click", function(){
    if(playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        if(scores[activePlayer] >= 100){
            playing = false
            dice.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
        } else {
        switchPlayer()
        }
    }
})


btnNew.addEventListener("click", init)