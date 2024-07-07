function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var role = document.getElementById("role").value;

  var userNameError = document.getElementById("userNameError");
  var EmailError = document.getElementById("EmailError");
  var PasswordError = document.getElementById("PasswordError");
  var confirmPasswordError = document.getElementById("confirmPasswordError");
  var errorMessages = document.getElementById("errorMessages");
  var successMessage = document.getElementById("successMessage");

  userNameError.innerHTML = "";
  EmailError.innerHTML = "";
  PasswordError.innerHTML = "";
  confirmPasswordError.innerHTML = "";
  errorMessages.innerHTML = "";
  successMessage.innerHTML = "";

  var isValid = true;

  if (username.length < 5) {
      userNameError.innerHTML = "Username must be at least 5 characters long.";
      isValid = false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      EmailError.innerHTML = "Please enter a valid email address.";
      isValid = false;
  }

  if (password.length < 8) {
      PasswordError.innerHTML = "Password must be at least 8 characters long.";
      isValid = false;
  }

  if (password !== confirmPassword) {
      confirmPasswordError.innerHTML = "Passwords do not match.";
      isValid = false;
  }

  if (!isValid) {
      errorMessages.style.display = "block";
      return false;
  }

  successMessage.innerHTML = "Form submitted successfully!";
  successMessage.style.color = "green";
  successMessage.style.display = "block";

  return false; // Prevent actual form submission for demonstration purposes
}
