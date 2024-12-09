import React from "react";
import Banner from "./Banner";
import bannerImage from "../assets/banner.png";

function Home() {
  return (
    <section id="home">
      <Banner image={bannerImage} />
      <div className="home-content">
        <h1>Bienvenidos a Calzado San Carlo</h1>
        <p>¡Experimenta lo nuestro!</p>
      </div>
    </section>
  );
}

export default Home;
