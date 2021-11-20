'use strict';

// Gives a number between 1 and 10
let secretNumber = Math.floor((Math.random() * 10) + 1);

// Declaring variables
let mid = document.querySelector(".mid");
let number = document.querySelector(".number");
let again = document.querySelector(".again");
let header = document.querySelector("header");
let check = document.querySelector(".check");
let score = 3;
let highScore = 0;
document.querySelector(".highscore").textContent = localStorage.getItem("score") || 0;

// Displaying the Message
const showMessage = message => {
    document.querySelector(".message").textContent = message;
}

// Checking the numbers
check.addEventListener("click", function() {
    let guess = Number(document.querySelector(".guess").value);

    // If there is no number
    if(!guess === "number" || guess === 0) {
        showMessage("Enter a number.");

        // IF CORRECT
    } else if (guess === secretNumber) {
        showMessage("Correct Number!");
        number.textContent = secretNumber;
        header.style.borderBottom ="7px solid green"
        number.style.border = "7px solid green";
        mid.classList.remove("hidden")
       again.classList.remove("hidden")
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("score", highScore)
            document.querySelector(".highscore").textContent = highScore;
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
            number.style.border = "7px solid red";
            number.textContent = "X";
           again.classList.remove("hidden")
            header.style.borderBottom ="7px solid red"
            mid.classList.remove("hidden")
        }
    }
});

// TRY AGAIN
document.querySelector(".again").addEventListener("click", function(){
    score = 3;
    secretNumber = Math.floor((Math.random() * 10) + 1)
    showMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    number.textContent = "?";
    document.querySelector(".guess").value = "";
    number.style.background = "#eee";
    header.style.borderBottom ="7px dashed #eee"
    number.style.border = "none";
    again.classList.add = "hidden";
    mid.classList.add("hidden")
})