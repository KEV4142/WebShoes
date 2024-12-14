import React from "react";
import Banner from "./Banner";
import bannerImage from "../assets/banner.png";

function Home() {
  return (
    <section id="home" className="common-section bg-light text-center py-5">
      <Banner image={bannerImage} />
      <div className="container mt-4">
        <h1 className="display-4 fw-bold">Bienvenidos a Calzado San Carlo</h1>
        <p className="lead text-secondary fs-2">¡Experimenta lo nuestro!</p>
      </div>
    </section>
  );
}

export default Home;

