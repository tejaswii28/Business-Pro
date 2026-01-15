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
let cart = {};
let total = 0;

function addToCart(service, price) {
  if (cart[service]) {
    cart[service].quantity++;
  } else {
    cart[service] = { price: price, quantity: 1 };
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
function submitFeedback(event) {
  event.preventDefault();
  alert("Thank you for your feedback!");
  event.target.reset();
}


