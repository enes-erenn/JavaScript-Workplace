"use strict";

// Reaching to the HTML elements
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const list = document.querySelector("#list");
const ntdEl = document.querySelector("#nothingToDo");

// Adding "Nothing To Do" Element
const ntdAdd = function (){
    const ntd = document.createElement("li");                                  // Create "li" El
    ntd.textContent = "There is nothing to do today 😃";                      // Set the content
    ntd.setAttribute("id", "nothingToDo");                                    // Give an Attribute
    list.appendChild(ntd);                                                    // Insert to the list
};

// Checking the "Nothing To Do" Element
const adderNTD = function(){
    if(list.childElementCount === 0){                                       // If child elements of the list equal to the zero
        ntdAdd();                                                           // Add "NTD" El
    } else if(list.childElementCount > 0){                                  // If child elements of the list are greater than zero
        ntdEl.remove();                                                     // Remove "NTD" El
    }
};

// Local Storage Array
let todos = [];

// toDoList Logic
const toDoList = function(){
    const li = document.createElement("li");                                // Create "li" El
    const closeButton = document.createElement("button");                   // Create "button" El
 
    // Checking the input value
    if (input.value !== ""){ // If input value is not blank

        // Checking the "Nothing To Do Element" every time and adding stuff to the list
        if(document.querySelector("#nothingToDo")){                         //  If there is "NTD" El
            document.querySelector("#nothingToDo").remove()                 //  Remove the "NTD" El

            li.textContent = input.value;                                   //  Set the "li" el content as input value
            list.appendChild(li);                                           //  Insert the "li" el to the "list"
            closeButton.textContent = "💣";                                 //  Set the "button" el content
            closeButton.style.opacity= 0;                                   //  Set the "button" el style
            li.append(closeButton);                                         //  Insert the "button" el to the "li" el
            input.value = "";                                               // Set the input value as blank

            // Delete the element "li"
            li.addEventListener('click', function(){                        // On click to the "li" el
               const abstract = this.textContent.split("💣");              // Split the emoji
               const indexOfLi = todos.indexOf(abstract[0]);                // Find the index number of clicked "li" el    
               todos.splice(indexOfLi, (indexOfLi + 1));                    // Splice the ends except this index
               localStorage.setItem("List", JSON.stringify(todos))          // Set current situation to the local storage
                this.remove();                                              // Remove this el
                adderNTD();                                                 // Check the "NTD" el
            });

            // Hover Effect
            li.addEventListener("mouseover", function(){
                closeButton.style.opacity= 1;
            });

            // Hover Effect
            li.addEventListener("mouseout", function(){
                closeButton.style.opacity= 0;
            });
        }

        // Checking the "Nothing To Do" Element" every time and adding stuff to the list
        else if(!document.querySelector("#nothingToDo")){
            li.textContent = input.value;
            list.appendChild(li);
            closeButton.textContent = "💣";
            closeButton.style.opacity= 0;
            li.append(closeButton);
            input.value = "";

            // Delete the element "li"
            li.addEventListener('click', function(){
                const abstract = this.textContent.split("💣");
                const indexOfLi = todos.indexOf(abstract[0]);
                todos.splice(indexOfLi, (indexOfLi + 1));
                localStorage.setItem("List", JSON.stringify(todos))
                this.remove();
                adderNTD();
            });

            // Hover Effect
            li.addEventListener("mouseover", function(){
                closeButton.style.opacity= 1;
            });

            // Hover Effect
            li.addEventListener("mouseout", function(){
                closeButton.style.opacity= 0;
            });
        };

    } else{
        alert("Please fill in the blank properly.");
    }
};


add.addEventListener("click", function(){

    input.value !== "" ? todos.push(input.value) : console.log()
    localStorage.setItem("List", JSON.stringify(todos))
});

const data = JSON.parse(localStorage.getItem("List"));


const getList = function(){
    JSON.parse(localStorage.getItem("List")).map(a => {
        document.querySelector("#nothingToDo") ? document.querySelector("#nothingToDo").remove() : console.log();
        const b = document.createElement("li")
        b.textContent = a
        document.querySelector("#list").appendChild(b);
        b.addEventListener('click', function(){
            const abstract = this.textContent.split("💣");
            const indexOfLi = todos.indexOf(abstract[0]);
            todos.splice(indexOfLi, (indexOfLi + 1));
            localStorage.setItem("List", JSON.stringify(todos))
            this.remove();
            adderNTD();
        })
    });

    const btn = document.createElement("button");  // Create the "button" el
    btn.textContent = "Refresh Memory" // Set the content of the "button"
    btn.setAttribute("id", "refreshMemory"); // Set the Attribute to the "button"
    document.querySelector("main").appendChild(btn);  // Insert the "button" el to the main
    btn.addEventListener("click", function(){ // On click to the button
    localStorage.clear(); // Clear memory
    });
    btn.addEventListener("click", function(){
        window.location.reload()
        this.remove()
    });
};

data ? getList() : console.log();

const myFunc = function(){
    document.querySelectorAll("li").forEach(d => {
        if(d.textContent !== "There is nothing to do today 😃")
        todos.push(d.textContent)
    })
};

myFunc();

add.addEventListener("click", toDoList);