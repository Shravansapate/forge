
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-button"); // Select the login button

    loginButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission
        document.body.style.backgroundColor = "rgb(144, 238, 144)"; // Change background color
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-button"); // Select the login button

    // Predefined username and password for verification
    const validUsername = "admin";
    const validPassword = "password123";

    loginButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission

        // Get the input values
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        // Verify the credentials
        if (username === validUsername && password === validPassword) {
            alert("Login successful!");
            document.body.style.backgroundColor = "rgb(144, 238, 144)"; // Change background color
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to index.html
            }, 500); // Delay of 500ms
        } else {
            errorMessage.textContent = "Invalid username or password. Please try again."; // Show error message
            errorMessage.style.color = "red"; // Style the error message
            document.body.style.backgroundColor = "rgb(255, 182, 193)"; // Change background color to indicate error // Change background color to indicate error
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menuLinks = document.querySelector(".menu-links");

    menuButton.addEventListener("click", () => {
        menuLinks.classList.toggle("show"); // Toggle the "show" class
    });
});