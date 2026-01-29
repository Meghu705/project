function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("error").innerText = "";
    document.getElementById("success").innerText = "";

    if (!email.includes("@")) {
        showError("Please enter a valid email address");
        return false;
    }

    if (message.length < 10) {
        showError("Message must be at least 10 characters");
        return false;
    }

    showSuccess("Message sent successfully!");
    return true;
}

function showError(msg) {
    document.getElementById("error").innerText = msg;
}

function showSuccess(msg) {
    document.getElementById("success").innerText = msg;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}
