/**
 * Dismiss success dialog and navigate back to the news form
 */
function dismissSuccessDialog() {
  const successDialog = document.getElementById("success-dialog");
  const newsForm = document.getElementById("newsForm");
  successDialog.style.display = "none";
  newsForm.style.display = "inherit";
}

/**
 * Subscribe mail and navigate to success dialog
 */
function subscribeMail() {
  const successDialog = document.getElementById("success-dialog");
  const newsForm = document.getElementById("newsForm");
  successDialog.style.display = "inherit";
  newsForm.style.display = "none";
}

/**
 * Validate the email input filed and make sure the user only enter valid email
 */
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailInputError = document.getElementById("error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailPattern.test(emailInput.value);

  if (isValidEmail) {
    subscribeMail();
    emailInput.value = "";
    emailInput.classList.remove("invalid");
    emailInputError.style.display = "none";
    emailInput.setAttribute("aria-invalid", "false");
    emailInput.removeAttribute("aria-describedby");
    return false;  // Allow form submission
  } else {
    emailInput.classList.add("invalid");
    emailInput.setAttribute("aria-invalid", "true");
    emailInputError.style.display = "inherit";
    return false;  // Prevent form submission
  }
}