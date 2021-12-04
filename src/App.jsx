import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Services from "./Pages/Services";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
