import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <main>
        <Home />
        <div className="double-line"></div>
        <Products />
        <div className="double-line"></div>
        <AboutUs />
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
