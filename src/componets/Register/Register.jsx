import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
        <h1>Please Register here</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <br />
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Already a user?</Link>
    </div>
  );
};

export default Register;
