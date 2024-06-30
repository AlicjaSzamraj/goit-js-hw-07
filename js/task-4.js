const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const loginForm = event.target;
  const email = loginForm.elements.email;
  const password = loginForm.elements.password;

  if (!email.value.trim() || !password.value.trim()) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log("Form data:", formData);

  registerForm.reset();
}
