'use strict';

// Gives a number between 1 and 10
const secretNumber = Math.floor((Math.random() * 10) + 1);

const mid = document.querySelector(".mid")
let score = 3;
let highScore = 0;
const showMessage = message => {
    document.querySelector(".message").textContent = message;
}

// Checking the numbers
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess)

    // If there is no number
    if(!guess === "number" || guess === 0) {
        showMessage("Enter a number.");

        // IF CORRECT
    } else if (guess === secretNumber) {
        showMessage("Correct Number!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("header").style.borderBottom ="7px solid green"
        document.querySelector(".number").style.border = "7px solid green";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
            document.querySelector(".again").style.display = "block";

        }

        // IF WRONG
    } else if (guess !== secretNumber) {
        if(score > 1) {
            showMessage(guess > secretNumber ? 
            "Too High" : "Too Low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            showMessage("GAME OVER!");
            document.querySelector(".number").style.border = "7px solid red";
            document.querySelector(".number").textContent = "X";
            document.querySelector(".again").classList.remove("hidden")
            document.querySelector("header").style.borderBottom ="7px solid red"
            mid.classList.remove("hidden")
        }
    }
});

// TRY AGAIN
document.querySelector(".again").addEventListener("click", function(){
    score = 3;
    const secretNumber = Math.floor(Math.random() * 11);
    showMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").style.background = "#eee";
    document.querySelector("header").style.borderBottom ="7px dashed #eee"
    document.querySelector(".number").style.border = "none";
    document.querySelector(".again").classList.add = "hidden";
    mid.classList.add("hidden")
})