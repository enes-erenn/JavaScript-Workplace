"use strict";

// Defining the elements
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const list = document.querySelector("#list");
const ntdEl = document.querySelector("#nothingToDo");

// Adding "Nothing To Do" Element
const ntdAdd = function (){
    const ntd = document.createElement("li");
    ntd.textContent = "There is nothing to do today 😃";
    ntd.setAttribute("id", "nothingToDo");
    list.appendChild(ntd);
} ;

// Checking the "Nothing To Do" Element
const adderNTD = function(){
    if(list.childElementCount === 0){
        ntdAdd();
    } else if(list.childElementCount > 0){
        ntdEl.remove();
    }
};

let todos = [];

// toDoList Logic
const toDoList = function(){
    const li = document.createElement("li");
    const closeButton = document.createElement("button");
    // Checking the input value
    if (input.value !== ""){
        // Checking the "Nothing To Do" Element" every time and adding stuff to the list
        if(document.querySelector("#nothingToDo")){
            document.querySelector("#nothingToDo").remove()
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
    })
    const btn = document.createElement("button");
    btn.textContent = "Refresh Memory"
    btn.setAttribute("id", "refreshMemory");
    document.querySelector("main").appendChild(btn);
    btn.addEventListener("click", function(){
    localStorage.clear();
    });
    btn.addEventListener("click", function(){
        window.location.reload()
        this.remove()
    })
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