"use strict";

// Reaching to the HTML elements
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const list = document.querySelector("#list");
const ntdEl = document.querySelector("#nothingToDo");

// Adding "Nothing To Do" Element
const ntdAdd = function () {
  const ntd = document.createElement("li"); // Create "li" El
  ntd.textContent = "There is nothing to do today 😃"; // Set the content
  ntd.setAttribute("id", "nothingToDo"); // Give an Attribute
  list.appendChild(ntd); // Insert to the list
};

// Checking the "Nothing To Do" Element
const adderNTD = function () {
  if (list.childElementCount === 0) {
    // If child elements of the list equal to the zero
    ntdAdd(); // Add "NTD" El
  } else if (list.childElementCount > 0) {
    // If child elements of the list are greater than zero
    ntdEl.remove(); // Remove "NTD" El
  }
};

// Local Storage Array
let todos = [];

// toDoList Logic
const toDoList = function () {
  const li = document.createElement("li"); // Create "li" El
  const closeButton = document.createElement("button"); // Create "button" El

  const oneCharacters = [];
  const str = input.value;
  for (let i = 0; i < str.length; i++) {
    const letters = str.charAt(i);
    oneCharacters.push(letters);
  }
  const unique = Array.from(new Set(oneCharacters));
  const safeInput = unique.length > 2 ? true : false;

  // Checking the input value
  if (input.value !== "" && safeInput === true) {
    // If input value is not blank

    // Add, Delete and Hover
    if (document.querySelector("#nothingToDo")) {
      //  If there is "NTD" El
      document.querySelector("#nothingToDo").remove(); //  Remove the "NTD" El

      // Add the element "li" and "close button"
      li.textContent = input.value; //  Set the "li" el content as input value
      list.appendChild(li); //  Insert the "li" el to the "list"
      closeButton.textContent = "💣"; //  Set the "button" el content
      closeButton.style.opacity = 0; //  Set the "button" el style
      li.append(closeButton); //  Insert the "button" el to the "li" el
      input.value = ""; // Set the input value as blank

      // Delete the element "li"
      li.addEventListener("click", function () {
        // On click to the "li" el
        const abstract = this.textContent.split("💣"); // Split the emoji
        const indexOfLi = todos.indexOf(abstract[0]); // Find the index number of clicked "li" el
        todos.splice(indexOfLi, 1); // Splice the ends except this index
        localStorage.setItem("List", JSON.stringify(todos)); // Set current situation to the local storage
        this.remove(); // Remove this el
        adderNTD(); // Check the "NTD" el
      });

      // Hover Effect
      li.addEventListener("mouseover", function () {
        // On Hover to the "li" el
        closeButton.style.opacity = 1; // Set the "close button" el opacity as 1
      });

      // Hover Effect
      li.addEventListener("mouseout", function () {
        // While mouse out of the "li" el
        closeButton.style.opacity = 0; // Set the "close button" el opacity as 0
      });
    }

    // Add, Delete and Hover
    else if (!document.querySelector("#nothingToDo")) {
      //  If there is not "NTD" El

      // Add the element "li" and "close button"
      li.textContent = input.value; //  Set the "li" el content as input value
      list.appendChild(li); //  Insert the "li" el to the "list"
      closeButton.textContent = "💣"; //  Set the "button" el content
      closeButton.style.opacity = 0; //  Set the "button" el style
      li.append(closeButton); //  Insert the "button" el to the "li" el
      input.value = ""; // Set the input value as blank

      // Delete the element "li"
      li.addEventListener("click", function () {
        // On click to the "li" el
        const abstract = this.textContent.split("💣"); // Split the emoji
        const indexOfLi = todos.indexOf(abstract[0]); // Find the index number of clicked "li" el
        todos.splice(indexOfLi, 1); // Splice the ends except this index
        localStorage.setItem("List", JSON.stringify(todos)); // Set current situation to the local storage
        this.remove(); // Remove this el
        adderNTD(); // Check the "NTD" el
      });

      // Hover Effect
      li.addEventListener("mouseover", function () {
        // On Hover to the "li" el
        closeButton.style.opacity = 1; // Set the "close button" el opacity as 1
      });

      // Hover Effect
      li.addEventListener("mouseout", function () {
        // While mouse out of the "li" el
        closeButton.style.opacity = 0; // Set the "close button" el opacity as 0
      });
    }
  } else {
    // If input value is blank
    alert("Please fill in the blank properly.");
    input.value = "";
  }
};

// Setting local storage by click to the "add button"
add.addEventListener("click", function () {
  const oneCharacters = [];
  const str = input.value;
  for (let i = 0; i < str.length; i++) {
    const letters = str.charAt(i);
    oneCharacters.push(letters);
  }
  const unique = Array.from(new Set(oneCharacters));
  const safeInput = unique.length > 2 ? true : false;

  input.value !== "" && safeInput === true
    ? todos.push(input.value)
    : console.log(); // If input value is not blank, push the input value to the "todos array"
  localStorage.setItem("List", JSON.stringify(todos)); // Set the "todos array" to the local storage
});

const data = JSON.parse(localStorage.getItem("List"));

// Getting current list (after the local storage)
const getList = function () {
  JSON.parse(localStorage.getItem("List")).map((a) => {
    // Get the local storage items

    // If there is "NTD" element, remove
    document.querySelector("#nothingToDo")
      ? document.querySelector("#nothingToDo").remove()
      : console.log();
    const b = document.createElement("li"); // Create "li" el
    b.textContent = a; // Set the "li" el content as input value
    document.querySelector("#list").appendChild(b); // Insert this "li" el into the "list" el

    b.addEventListener("click", function () {
      // On click to the "li" el
      const separate = this.textContent.split("💣"); // Separate the emoji from the text
      const indexOfLi = todos.indexOf(separate[0]); // Select the pure text and find the index number
      todos.splice(indexOfLi, 1); // Splice the ends except this index
      localStorage.setItem("List", JSON.stringify(todos)); // Set to the local storage the current "todos array"
      this.remove(); // Remove this "li" el
      adderNTD(); // Check the "NTD"
    });
  });

};

const btn = document.createElement("button"); // Create the "button" el
btn.textContent = "Clear All"; // Set the content of the "button"
btn.setAttribute("id", "clear-all"); // Set the Attribute to the "button"
document.querySelector("main").appendChild(btn); // Insert the "button" el to the main
btn.addEventListener("click", function () {
  // On click to the button
  localStorage.clear(); // Clear memory (local storage)
});

btn.addEventListener("click", function () {
  // On click to the new button
  window.location.reload(); // Reload the page
  this.remove(); // Remove this "button" el
});

data ? getList() : console.log(); // Run the getList() if there is data

const myFunc = function () {
  document.querySelectorAll("li").forEach((d) => {
    // Select all of the "li" elements
    if (d.textContent !== "There is nothing to do today 😃")
      // If content of the "li" elements is not "NTD"
      todos.push(d.textContent); // Push the content to the "todos array"
  });
};

myFunc();

window.onload = function () {
  // Auto selection for input
  input.focus();
  input.select();
};

input.addEventListener("keyup", function (event) {
  // Form submitting with "enter" key
  if (event.keyCode === 13) {
    event.preventDefault();
    add.click();
  }
});

add.addEventListener("click", toDoList);
