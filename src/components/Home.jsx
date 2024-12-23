import React from "react";
import Banner from "./Banner";
import bannerImage from "../assets/bannerNuevo.webp";
import generaciones from "../assets/generaciones.webp";


// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
function Home() {
  return (
    <section id="home" className="common-section bg-light text-center py-3">
      <Banner image={bannerImage} />
      <div className="container mt-4">
        <h1 className="display-4 fw-bold">Bienvenidos a Calzado San Carlo</h1>
        <p className="lead text-secondary fs-2">¡Experimenta lo nuestro!</p>
      </div>
      <div className="mt-4">
        <img
          src={generaciones}
          alt="Calzado San Carlo - Generaciones"
          className="img-fluid rounded shadow"
          style={{
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </section>
  );
}

export default Home;

