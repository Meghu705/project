function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

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

function showError(text) {
  alert(text);
}

function showSuccess(text) {
  alert(text);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

window.onload = function () {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
};