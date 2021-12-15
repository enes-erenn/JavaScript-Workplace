// Defining the elements.
let input = document.getElementById("input");
let add = document.getElementById("add");
let list = document.getElementById("list");


// Adding "There is nothing to do today :)" if there is no list.
let adderNTD = () => {
    if(document.getElementById("list").childElementCount == 0) {            // If there is no list in the list,
    let li = document.createElement("li");                                    // Create a li element,
    li.textContent = "There is nothing to do today :)";                       // Includes "There is nothing to do today :)",
    li.setAttribute("id", "nothingToDo");                                   // Add a ID called "nothingToDo",
    list.appendChild(li)                                                    // Insert as a li into the "ul".
    }
}

// Adding List
let addLi = () => {
    if (input.value.length > 1) {                                           // If input value length is greater than 1;
    let li = document.createElement("li");                                    // Create a li element,
    let closeButton = document.createElement("button");                     // Create a button element,
    li.textContent = input.value;                                             // Set the content of list item is input's value,
    localStorage.setItem("list", JSON.stringify(list));
    closeButton.textContent = "X";                                          // Button input is "X",
    list.appendChild(li);                                                   // Insert as a li into the "ul",
    li.append(closeButton);                                                 // Insert as a button into the "li",
    closeButton.addEventListener('click', function(e){                      // When clicked to the "closeButton";
        this.parentElement.remove();                                        // Remove Parent Element of this button,
        let checker = document.getElementById("list").childElementCount;    // Check it how many element there is into the list,
        console.log(checker)                                                // Print the element number to the console,
        adderNTD();                                                         // Run the "adderNTD" function.
    });
    document.getElementById("nothingToDo").remove()                         // Remove the element that has an ID called "nothingToDo".
    input.value=""                                                          // Set as nothing of the Input's value.
    
    } else {                                                                // If input value length is not greater than 1;
        alert("Please fill in the blank properly.")                         // Occurs an alert.
    }
}


add.addEventListener("click", addLi);                                       // Add an click event to the "add" and run the "addLi" function.