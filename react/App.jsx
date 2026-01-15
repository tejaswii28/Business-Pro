import React, { useState } from "react";

function App() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful (React demo)");
    setLoginData({ email: "", password: "" });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account created (React demo)");
    setSignupData({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <h1>Business Pro</h1>
      <p>Collaborate. Grow. Scale.</p>

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>

      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={signupData.name}
          onChange={(e) =>
            setSignupData({ ...signupData, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={signupData.email}
          onChange={(e) =>
            setSignupData({ ...signupData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default App;
