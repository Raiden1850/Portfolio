console.log("=================================");
console.log("Wyatt's Portfolio JavaScript");
console.log("=================================");

console.log("Portfolio JavaScript loaded successfully.");

console.log("Current page:", document.title);
console.log("Current URL:", window.location.href);
console.log("Page loaded at:", new Date().toLocaleString());

console.log("Dark mode button:", document.getElementById("dark-mode-button"));

const experimentMessage = "Console.log experiment completed.";
console.log("Experiment message:", experimentMessage);

console.log("Navigation links:", document.querySelectorAll("nav a").length);

console.log("Main element:", document.querySelector("main"));

console.log("Footer element:", document.querySelector("footer"));

const darkModeButton = document.getElementById("dark-mode-button");

if (darkModeButton) {
    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "Light Mode";
            console.log("Dark mode enabled.");
        } else {
            darkModeButton.textContent = "Dark Mode";
            console.log("Dark mode disabled.");
        }
    });
}