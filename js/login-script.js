const validUsername = "user123"; // Sample username
const validPassword = "password123"; // Sample password (must be at least 8 characters)
let attempts = 0;

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === validUsername && password === validPassword) {
        // Redirect to products page (replace with your actual page)
        window.location.href = "./bookAppointment.html"; 
    } else {
        attempts++;
        document.getElementById("error-message").textContent = "Invalid username or password.";

        if (attempts >= 3) {
            // Redirect to error page after 3 attempts
            window.location.href = "error.html"; 
        }
    }
});
