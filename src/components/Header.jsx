import React from "react";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
function Header() {
  return (
    <header
      className={`navbar navbar-expand-lg navbar-dark navbar-custom ${!isMobile ? "fixed-top" : "" }`}
      style={isMobile ? { position: "static", width: "100%" } : {}}
    >

      <div className="container">
        <a className="navbar-brand" href="#home">
          <img
            src="/logo.jpg"
            alt="Calzado San Carlos"
            style={{ width: "100px", height: "100px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products"> 
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
