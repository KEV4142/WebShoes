import React from "react";
import Banner from "./Banner";
import bannerImage from "../assets/banner.png";

// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
function Home() {
  return (
    <section id="home" className="common-section bg-light text-center py-3">
      {/* {!isMobile && <Banner image={bannerImage} />} */}
      <Banner image={bannerImage} />
      <div className="container mt-4">
        <h1 className="display-4 fw-bold">Bienvenidos a Calzado San Carlo</h1>
        <p className="lead text-secondary fs-2">¡Experimenta lo nuestro!</p>
      </div>
    </section>
  );
}

export default Home;

