// =====================
// UTIL: EMAIL VALIDATION
// =====================
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// =====================
// LOGIN FORM
// =====================
const loginForm = document.querySelector("#auth .auth-box form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector("input[type='email']").value.trim();
    const password = this.querySelector("input[type='password']").value.trim();

    if (!email || !password) {
      alert("Please fill in all login fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Enter a valid email address.");
      return;
    }

    alert("Login successful");
    this.reset();
  });
}

// =====================
// SIGNUP FORM
// =====================
const signupForm = document.querySelectorAll("#auth .auth-box form")[1];

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value.trim();
    const email = this.querySelector("input[type='email']").value.trim();
    const password = this.querySelector("input[type='password']").value.trim();

    if (!name || !email || !password) {
      alert("Please fill in all signup fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Enter a valid email address.");
      return;
    }

    alert("Account created successfully (frontend demo)");
    this.reset();
  });
}

// =====================
// CART LOGIC
// =====================
let cart = {};
let total = 0;

function addToCart(service, price) {
  if (cart[service]) {
    cart[service].quantity++;
  } else {
    cart[service] = { price, quantity: 1 };
  }
  updateCart();
}

function increment(service) {
  cart[service].quantity++;
  updateCart();
}

function decrement(service) {
  cart[service].quantity--;
  if (cart[service].quantity === 0) {
    delete cart[service];
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  total = 0;

  for (let service in cart) {
    const li = document.createElement("li");
    const itemTotal = cart[service].price * cart[service].quantity;
    total += itemTotal;
  

    li.innerHTML = `
      ${service} (₹${cart[service].price}) × ${cart[service].quantity}
      <button onclick="increment('${service}')">+</button>
      <button onclick="decrement('${service}')">−</button>
    `;
    cartItems.appendChild(li);
  }

  document.getElementById("total").textContent = total;
}

// =====================
// FEEDBACK + DOWNLOAD TXT
// =====================
function submitFeedback(event) {
  event.preventDefault();

  const form = event.target;
  const message = form.querySelector("textarea")?.value || "";

  // Validation
  if (!message.trim()) {
    alert("Feedback cannot be empty.");
    return;
  }

  // Success message
  alert("Thank you for your feedback!");

  // Reset form
  form.reset();
}


