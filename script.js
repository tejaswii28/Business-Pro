// LOGIN FORM
const loginForm = document.querySelector("#auth .auth-box form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector("input[type='email']").value;
    const password = this.querySelector("input[type='password']").value;

    if (email === "" || password === "") {
      alert("Please fill in all login fields.");
    } else {
      alert("Login successful (frontend demo)");
      this.reset();
    }
  });
}

// SIGN UP FORM
const signupForm = document.querySelectorAll("#auth .auth-box form")[1];

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value;
    const email = this.querySelector("input[type='email']").value;
    const password = this.querySelector("input[type='password']").value;

    if (name === "" || email === "" || password === "") {
      alert("Please fill in all signup fields.");
    } else {
      alert("Account created successfully (frontend demo)");
      this.reset();
    }
  });
}
