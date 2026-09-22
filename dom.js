console.log("DOM Lab JavaScript loaded.");


// =========================================
// DOM ELEMENT SELECTION
// =========================================

const title = document.getElementById("page-title");

const subtitle = document.querySelector("#subtitle");

const description = document.querySelector("#description");

const welcomeSection =
    document.getElementById("welcome-section");

const dynamicMessage =
    document.querySelector("#dynamic-message");


// =========================================
// MODIFY EXISTING DOM
// =========================================

title.textContent = "JavaScript DOM Surgeon Lab";

subtitle.textContent =
    "This page changes itself with JavaScript.";

description.textContent =
    "JavaScript is selecting and modifying elements on this page.";

dynamicMessage.innerHTML =
    "<strong>JavaScript successfully modified this message!</strong>";

welcomeSection.classList.add("dom-active");

console.log("Existing DOM elements modified.");


// =========================================
// TOGGLE HIGHLIGHT
// =========================================

const toggleButton =
    document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {

    welcomeSection.classList.toggle("highlight");

    console.log("Highlight class toggled.");

});


// =========================================
// CREATE DYNAMIC ELEMENTS
// =========================================

const newElements =
    document.getElementById("new-elements");

const firstElement =
    document.createElement("p");

firstElement.textContent =
    "This paragraph was created with JavaScript.";

newElements.appendChild(firstElement);


const secondElement =
    document.createElement("p");

secondElement.textContent =
    "This is another dynamically created element.";

newElements.appendChild(secondElement);


const thirdElement =
    document.createElement("p");

thirdElement.textContent =
    "The DOM can create content while the page is running.";

newElements.appendChild(thirdElement);

console.log("Three dynamic elements created.");


// =========================================
// CHANGE PAGE BUTTON
// =========================================

const changeButton =
    document.getElementById("change-button");

changeButton.addEventListener("click", function () {

    title.textContent = "The Page Changed!";

    description.textContent =
        "You clicked the button and JavaScript changed the page.";

    changeButton.textContent = "Changed!";

    console.log("Page content changed.");

});


// =========================================
// TO-DO LIST ELEMENTS
// =========================================

const todoForm =
    document.getElementById("todo-form");

const todoInput =
    document.getElementById("todo-input");

const todoList =
    document.getElementById("todo-list");

const taskCountDisplay =
    document.getElementById("task-count");

const completedCountDisplay =
    document.getElementById("completed-count");


// =========================================
// APPLICATION STATE
// =========================================

let taskCount = 0;

let completedCount = 0;


// =========================================
// UPDATE COUNTERS
// =========================================

function updateCounters() {

    taskCountDisplay.textContent =
        `Tasks: ${taskCount}`;

    completedCountDisplay.textContent =
        `Completed: ${completedCount}`;

    console.log(
        `Tasks: ${taskCount} | Completed: ${completedCount}`
    );

}


// =========================================
// ADD TASK
// =========================================

todoForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get user input

    const taskText =
        todoInput.value.trim();


    // Prevent empty tasks

    if (taskText === "") {

        return;

    }


    // =====================================
    // CREATE LIST ITEM
    // =====================================

    const listItem =
        document.createElement("li");


    // =====================================
    // CREATE TASK TEXT
    // =====================================

    const taskSpan =
        document.createElement("span");

    taskSpan.textContent =
        taskText;


    // =====================================
    // CREATE COMPLETE BUTTON
    // =====================================

    const completeButton =
        document.createElement("button");

    completeButton.type = "button";

    completeButton.textContent =
        "Complete";

    completeButton.classList.add(
        "complete-button"
    );


    // =====================================
    // CREATE REMOVE BUTTON
    // =====================================

    const removeButton =
        document.createElement("button");

    removeButton.type = "button";

    removeButton.textContent =
        "Remove";

    removeButton.classList.add(
        "remove-button"
    );


    // =====================================
    // ADD ELEMENTS TO LIST ITEM
    // =====================================

    listItem.appendChild(taskSpan);

    listItem.appendChild(completeButton);

    listItem.appendChild(removeButton);


    // =====================================
    // ADD LIST ITEM TO PAGE
    // =====================================

    todoList.appendChild(listItem);


    // =====================================
    // UPDATE STATE
    // =====================================

    taskCount++;

    updateCounters();


    console.log(
        "New task added:",
        taskText
    );


    // Clear input

    todoInput.value = "";


// =========================================
// COMPLETE / UNDO TASK
// =========================================

    completeButton.addEventListener(
        "click",
        function () {

            const isCompleted =
                listItem.classList.contains("completed");


            if (isCompleted) {

                // Change back to incomplete

                listItem.classList.remove(
                    "completed"
                );

                completedCount--;

                completeButton.textContent =
                    "Complete";

                console.log(
                    "Task marked incomplete:",
                    taskText
                );

            } else {

                // Mark task as completed

                listItem.classList.add(
                    "completed"
                );

                completedCount++;

                completeButton.textContent =
                    "Undo";

                console.log(
                    "Task marked complete:",
                    taskText
                );

            }


            updateCounters();

        }
    );


// =========================================
// REMOVE TASK
// =========================================

    removeButton.addEventListener(
        "click",
        function () {

            const isCompleted =
                listItem.classList.contains("completed");


            // If completed, update completed count

            if (isCompleted) {

                completedCount--;

            }


            // Remove element from DOM

            listItem.remove();


            // Update total task count

            taskCount--;


            // Update displayed counters

            updateCounters();


            console.log(
                "Task removed:",
                taskText
            );

        }
    );

});


// =========================================
// PROJECT INFORMATION
// =========================================

const pageName = "DOM Surgeon";

const message =
    `Welcome to the ${pageName} project.`;

console.log(
    `Current project: ${pageName}`
);

console.log(
    `Task count starts at ${taskCount}`
);

console.log(message);