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

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const dateInput = document.getElementById("date");
    const topicInput = document.getElementById("topic");
    const messageInput = document.getElementById("message");

    const formStatus = document.getElementById("form-status");
    const summary = document.getElementById("submission-summary");


    // Set the minimum date to today
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;

    function showFeedback(input, feedbackId, message, isValid) {

        const feedback = document.getElementById(feedbackId);

        input.classList.remove("valid", "invalid");
        feedback.classList.remove("valid", "invalid");

        if (isValid) {
            input.classList.add("valid");
            feedback.classList.add("valid");
            feedback.textContent = "✓ Valid";
        } else {
            input.classList.add("invalid");
            feedback.classList.add("invalid");
            feedback.textContent = message;
        }

        return isValid;
    }

    function validateName() {

        const name = nameInput.value.trim();

        if (name.length < 2) {
            return showFeedback(
                nameInput,
                "name-feedback",
                "Name must contain at least 2 characters.",
                false
            );
        }

        return showFeedback(
            nameInput,
            "name-feedback",
            "",
            true
        );
    }

    function validateEmail() {

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return showFeedback(
                emailInput,
                "email-feedback",
                "Enter a valid email address.",
                false
            );
        }

        return showFeedback(
            emailInput,
            "email-feedback",
            "",
            true
        );
    }

    function validatePhone() {

        const phone = phoneInput.value.trim();

        const phonePattern =
            /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

        if (!phonePattern.test(phone)) {
            return showFeedback(
                phoneInput,
                "phone-feedback",
                "Enter a valid 10-digit phone number.",
                false
            );
        }

        return showFeedback(
            phoneInput,
            "phone-feedback",
            "",
            true
        );
    }

    function validateDate() {

        if (!dateInput.value) {
            return showFeedback(
                dateInput,
                "date-feedback",
                "Please select a contact date.",
                false
            );
        }

        if (dateInput.value < today) {
            return showFeedback(
                dateInput,
                "date-feedback",
                "Date cannot be in the past.",
                false
            );
        }

        return showFeedback(
            dateInput,
            "date-feedback",
            "",
            true
        );
    }

    function validateContactMethod() {

        const selected =
            document.querySelector(
                'input[name="contact-method"]:checked'
            );

        const feedback =
            document.getElementById(
                "contact-method-feedback"
            );

        if (!selected) {
            feedback.textContent =
                "Please select a contact method.";
            feedback.className =
                "form-feedback invalid";

            return false;
        }

        feedback.textContent = "✓ Valid";
        feedback.className =
            "form-feedback valid";

        return true;
    }

    function validateTopic() {

        if (topicInput.value === "") {
            return showFeedback(
                topicInput,
                "topic-feedback",
                "Please select a topic.",
                false
            );
        }

        return showFeedback(
            topicInput,
            "topic-feedback",
            "",
            true
        );
    }

    function validateMessage() {

        const message =
            messageInput.value.trim();

        if (message.length < 10) {
            return showFeedback(
                messageInput,
                "message-feedback",
                "Message must contain at least 10 characters.",
                false
            );
        }

        return showFeedback(
            messageInput,
            "message-feedback",
            "",
            true
        );
    }-

    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    phoneInput.addEventListener("input", validatePhone);
    dateInput.addEventListener("change", validateDate);
    topicInput.addEventListener("change", validateTopic);
    messageInput.addEventListener("input", validateMessage);

    document
        .querySelectorAll('input[name="contact-method"]')
        .forEach(function (radio) {
            radio.addEventListener(
                "change",
                validateContactMethod
            );
        });

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const validName = validateName();
        const validEmail = validateEmail();
        const validPhone = validatePhone();
        const validDate = validateDate();
        const validMethod = validateContactMethod();
        const validTopic = validateTopic();
        const validMessage = validateMessage();

        const formIsValid =
            validName &&
            validEmail &&
            validPhone &&
            validDate &&
            validMethod &&
            validTopic &&
            validMessage;

        if (!formIsValid) {

            formStatus.textContent =
                "Please correct the errors before submitting.";

            formStatus.style.color = "#dc3545";

            console.log(
                "Form submission blocked because the form is invalid."
            );

            return;
        }

        const selectedMethod =
            document.querySelector(
                'input[name="contact-method"]:checked'
            ).value;

        const wantsUpdates =
            document.getElementById("updates").checked
                ? "Yes"
                : "No";

        summary.innerHTML = `
            <h3>Message Ready to Send</h3>

            <ul>
                <li><strong>Name:</strong> ${nameInput.value}</li>
                <li><strong>Email:</strong> ${emailInput.value}</li>
                <li><strong>Phone:</strong> ${phoneInput.value}</li>
                <li><strong>Date:</strong> ${dateInput.value}</li>
                <li><strong>Contact Method:</strong> ${selectedMethod}</li>
                <li><strong>Topic:</strong> ${topicInput.value}</li>
                <li><strong>Updates:</strong> ${wantsUpdates}</li>
                <li><strong>Message:</strong> ${messageInput.value}</li>
            </ul>
        `;

        formStatus.textContent =
            "✓ Form successfully validated!";

        formStatus.style.color = "#198754";

        console.log(
            "Form successfully validated and summary created."
        );
    });


    contactForm.addEventListener("reset", function () {

        setTimeout(function () {

            document
                .querySelectorAll(".form-feedback")
                .forEach(function (feedback) {
                    feedback.textContent = "";
                    feedback.className =
                        "form-feedback";
                });

            document
                .querySelectorAll(
                    "#contact-form input, #contact-form select, #contact-form textarea"
                )
                .forEach(function (input) {
                    input.classList.remove(
                        "valid",
                        "invalid"
                    );
                });

            formStatus.textContent = "";

            summary.innerHTML =
                "<p>Your validated information will appear here after successfully submitting the form.</p>";

        }, 0);
    });
}

const apiStatus = document.getElementById("api-status");
const apiResult = document.getElementById("api-result");

if (apiStatus && apiResult) {

    console.log("Starting public API request...");

    // Loading state
    apiStatus.textContent =
        "Loading API data...";

    apiResult.innerHTML = "";

    fetch("https://randomuser.me/api/")
        .then(function (response) {

            if (!response.ok) {
                throw new Error(
                    "API request failed with status " +
                    response.status
                );
            }

            return response.json();
        })

        .then(function (data) {

            const user = data.results[0];

            apiStatus.textContent =
                "✓ API data loaded successfully.";

            apiStatus.className =
                "api-success";

            apiResult.innerHTML = `
                <h3>Random User from Public API</h3>

                <p>
                    <strong>Name:</strong>
                    ${user.name.first} ${user.name.last}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${user.email}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${user.location.city},
                    ${user.location.state}
                </p>
            `;

            console.log(
                "API data successfully loaded:",
                user
            );
        })

        .catch(function (error) {

            apiStatus.textContent =
                "Unable to load API data.";

            apiStatus.className =
                "api-error";

            apiResult.innerHTML = `
                <p class="api-error">
                    The public API could not be reached right now.
                    Please refresh the page and try again later.
                </p>
            `;

            console.error(
                "Public API error:",
                error
            );
        });
}