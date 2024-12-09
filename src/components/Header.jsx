import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#home">
          <img
            src="/logo.jpg"
            alt="Calzado San Carlos"
            style={{ width: "100px", height: "100px" }}
          />
        </a>
      </div>
      <nav>
        <ul>
          <li>
          <a href="#home">Inicio</a>
          </li>
          <li>
          <a href="#products">Productos</a>
          </li>
          <li>
          <a href="#about-us">Sobre Nosotros</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
