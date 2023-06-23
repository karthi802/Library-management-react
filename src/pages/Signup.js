import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form>
          <h5>Name</h5>
          <input type="text" />
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button className="signup-signup-button">Sign Up</button>
        </form>
        <button className="signup-register-button">
          Already have an account?
        </button>
      </div>
    </div>
  );
}

export default Signup;
