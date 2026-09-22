/* =========================================
   WYATT'S PORTFOLIO - CUSTOM 404 JAVASCRIPT
   ========================================= */


// ---------- TERMINAL ELEMENTS ----------

const terminalText = document.getElementById("terminal-text");

const errorLine = document.getElementById("error-line");

const locationLine = document.getElementById("location-line");

const solutionLine = document.getElementById("solution-line");

const tryAgainButton = document.getElementById("tryAgain");


// ---------- TERMINAL MESSAGES ----------

const messages = [
    "Searching for page...",
    "Checking portfolio directory...",
    "Scanning available routes...",
    "Comparing requested URL...",
    "Route not found."
];


// ---------- TYPEWRITER EFFECT ----------

let messageIndex = 0;

function typeMessage(message, callback) {

    terminalText.textContent = "";

    let characterIndex = 0;

    const typing = setInterval(() => {

        terminalText.textContent += message[characterIndex];

        characterIndex++;

        if (characterIndex >= message.length) {

            clearInterval(typing);

            if (callback) {
                setTimeout(callback, 500);
            }

        }

    }, 35);
}


// ---------- RUN TERMINAL SEQUENCE ----------

function runErrorSequence() {

    // Reset everything

    errorLine.classList.remove("show-line");

    locationLine.classList.remove("show-line");

    solutionLine.classList.remove("show-line");


    // First message

    typeMessage(messages[0], () => {

        typeMessage(messages[1], () => {

            typeMessage(messages[2], () => {

                typeMessage(messages[3], () => {

                    typeMessage(messages[4], () => {

                        // Show error

                        errorLine.classList.add("show-line");


                        // Show warning

                        setTimeout(() => {

                            locationLine.classList.add("show-line");

                        }, 500);


                        // Show success

                        setTimeout(() => {

                            solutionLine.classList.add("show-line");

                        }, 1000);

                    });

                });

            });

        });

    });

}


// ---------- TRY AGAIN BUTTON ----------

tryAgainButton.addEventListener("click", () => {

    // Change button text

    tryAgainButton.textContent = "Scanning...";


    // Run animation again

    runErrorSequence();


    // Reset button

    setTimeout(() => {

        tryAgainButton.textContent = "Try Again";

    }, 3500);

});


// ---------- START PAGE ----------

runErrorSequence();