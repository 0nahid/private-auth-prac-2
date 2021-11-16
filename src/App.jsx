import React from "react";
import { Route, Routes } from "react-router";
import About from "./componets/About/About";
import Header from "./componets/Header/Header";
import Home from "./componets/Home/Home";
import Services from "./componets/Services/Services";
import Contact from "./componets/Contact/Contact";
import Login from "./componets/Login/Login";
import Register from "./componets/Register/Register";
import './App.css'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
