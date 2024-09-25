document.querySelector(".img__btn").addEventListener("click", function () {
  document.querySelector(".cont").classList.toggle("s--signup");
});
//
// CLIENT SIDE VALIDATION
//
const departmentSelect = document.getElementById("department");
const govtIdInput = document.getElementById("govt-id");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signInBtn = document.getElementById("sign-in-btn");
const nameInput = document.getElementById("name");
const signUpEmailInput = document.getElementById("sign-up-email");
const signUpPasswordInput = document.getElementById("sign-up-password");
const signUpBtn = document.getElementById("sign-up-btn");

// Add event listeners for input fields
govtIdInput.addEventListener("input", validateGovtId);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
nameInput.addEventListener("input", validateName);
signUpEmailInput.addEventListener("input", validateEmail);
signUpPasswordInput.addEventListener("input", validatePassword);

// Add event listener for sign in button
signInBtn.addEventListener("click", validateSignInForm);

// Add event listener for sign up button
signUpBtn.addEventListener("click", validateSignUpForm);

// Validation functions
function validateGovtId() {
  const govtId = govtIdInput.value.trim();
  if (govtId === "") {
    document.getElementById("govt-id-error").innerText =
      "Please enter your Govt. Id";
    return false;
  } else {
    document.getElementById("govt-id-error").innerText = "";
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").innerText =
      "Please enter a valid email address";
    return false;
  } else {
    document.getElementById("email-error").innerText = "";
    return true;
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  if (password.length < 8) {
    document.getElementById("password-error").innerText =
      "Password must be at least 8 characters long";
    return false;
  } else {
    document.getElementById("password-error").innerText = "";
    return true;
  }
}

function validateName() {
  const name = nameInput.value.trim();
  if (name === "") {
    document.getElementById("name-error").innerText = "Please enter your name";
    return false;
  } else {
    document.getElementById("name-error").innerText = "";
    return true;
  }
}

function validateSignInForm() {
  if (!validateGovtId() || !validateEmail() || !validatePassword()) {
    return false;
  } else {
    // Form is valid, proceed with sign in
    console.log("Sign in form is valid");
    return true;
  }
}

function validateSignUpForm() {
  if (!validateName() || !validateEmail() || !validatePassword()) {
    return false;
  } else {
    // Form is valid, proceed with sign up
    console.log("Sign up form is valid");
    return true;
  }
}
