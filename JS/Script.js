const loginButton = document.getElementById("LoginButton");
const registerButton = document.getElementById("RegistrationFormLink");
const loginForm = document.getElementById("AccountAuthenticationForm");
const registerForm = document.getElementById("RegisterAccountForm");
const loginFormLink = document.getElementById("LoginFormLink");

// Show the login form as a popup
loginButton.addEventListener("click", function () {
    console.log("Login button clicked");
    loginForm.style.display = "block";
    registerForm.style.display = "none"; // Hide the register form if it's open
});

// Show the register form as a popup
registerButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    console.log("Register link clicked");
    registerForm.style.display = "block";
    loginForm.style.display = "none"; // Hide the login form if it's open
});

// Show the login form when clicking "Login Here" in the register form
loginFormLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    console.log("Login Here link clicked");
    loginForm.style.display = "block";
    registerForm.style.display = "none"; // Hide the register form
});

// Close the forms when clicking outside of them
document.addEventListener("click", function (event) {
    if (!loginForm.contains(event.target) && event.target !== loginButton) {
        console.log("Closing login form");
        loginForm.style.display = "none";
    }
    if (!registerForm.contains(event.target) && event.target !== registerButton) {
        console.log("Closing register form");
        registerForm.style.display = "none";
    }
});