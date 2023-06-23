import React from "react";
//import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login-signin-button">Sign In</button>
        </form>
        <button className="login-register-button">Create your Account</button>
      </div>
    </div>
  );
}

export default Login;
