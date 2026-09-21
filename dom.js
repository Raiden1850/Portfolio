

console.log("DOM Lab JavaScript loaded.");

// getElementById()
const title = document.getElementById("page-title");

// querySelector()
const subtitle = document.querySelector("#subtitle");

// querySelector()
const description = document.querySelector("#description");

// getElementById()
const welcomeSection = document.getElementById("welcome-section");

// querySelector()
const dynamicMessage = document.querySelector("#dynamic-message");


// Modify text using textContent
title.textContent = "JavaScript DOM Surgeon Lab";

// Modify text
subtitle.textContent = "This page changes itself with JavaScript.";

// Modify text
description.textContent =
    "JavaScript is selecting and modifying elements on this page.";

// Modify HTML
dynamicMessage.innerHTML =
    "<strong>JavaScript successfully modified this message!</strong>";

// Modify a class
welcomeSection.classList.add("dom-active");

console.log("Five DOM elements modified.");


const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {
    welcomeSection.classList.toggle("highlight");

    console.log("Highlight class toggled.");
});

const newElements = document.getElementById("new-elements");

// Create first element
const firstElement = document.createElement("p");
firstElement.textContent = "This paragraph was created with JavaScript.";
newElements.appendChild(firstElement);

// Create second element
const secondElement = document.createElement("p");
secondElement.textContent = "This is another dynamically created element.";
newElements.appendChild(secondElement);

// Create third element
const thirdElement = document.createElement("p");
thirdElement.textContent = "The DOM can create content while the page is running.";
newElements.appendChild(thirdElement);

console.log("Three new elements created and appended.");


const changeButton = document.getElementById("change-button");

changeButton.addEventListener("click", function () {

    title.textContent = "The Page Changed!";

    description.textContent =
        "You clicked the button and JavaScript changed the page.";

    changeButton.textContent = "Changed!";

    console.log("Page content changed with JavaScript.");
});

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");


// Add a new task
todoForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create list item
    const listItem = document.createElement("li");

    // ES6 template literal
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button type="button" class="complete-button">
            Complete
        </button>
    `;

    todoList.appendChild(listItem);

    console.log("New task added:", taskText);

    // Clear input
    todoInput.value = "";

    // Find complete button
    const completeButton =
        listItem.querySelector(".complete-button");

    // Mark task complete
    completeButton.addEventListener("click", function () {

        listItem.classList.toggle("completed");

        console.log("Task completion toggled:", taskText);
    });
});

const pageName = "DOM Surgeon";
let taskCount = 0;

console.log(`Current project: ${pageName}`);
console.log(`Task count starts at ${taskCount}`);


const message = `Welcome to the ${pageName} project.`;

console.log(message);