import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
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
