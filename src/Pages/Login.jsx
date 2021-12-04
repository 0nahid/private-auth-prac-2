import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <h1>Please Login here</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <br />
      <Link to="/register">New user?</Link>
    </div>
  );
};

export default Login;
