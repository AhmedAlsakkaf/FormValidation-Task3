function validateForm() {
    
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var role = document.getElementById("role").value;


  //userName error
  //email address error
  //password error

  var userNameError = document.getElementById("userNameError");
  userNameError.innerHTML = "";

  var EmailError = document.getElementById("EmailError");
  EmailError.innerHTML = "";

  var PasswordError = document.getElementById("PasswordError");
  PasswordError.innerHTML = "";


  var isValid = true;

  if (username.length < 5) {
      userNameError.innerHTML += "Username must be at least 5 characters long.<br>";
      isValid = false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    EmailError.innerHTML += "Please enter a valid email address.<br>";
      isValid = false;
  }

  if (password.length < 8) {
    PasswordError.innerHTML += "Password must be at least 8 characters long.<br>";
      isValid = false;
  }

  if (password !== confirmPassword) {
      errorMessages.innerHTML += "Passwords do not match.<br>";
      isValid = false;
  }

  if (!isValid) {
      errorMessages.style.display = "block";
      return false;
  }

  return true;
}
