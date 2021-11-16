import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useFirebase from "./../../hooks/useFirebase";
const Header = () => {
  const { user, logout } = useFirebase();
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
      {user?.displayName || <Link to="/login">Login</Link>}
      {user?.email && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Header;
