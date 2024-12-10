import React from "react";
import ImageCarousel from "./Carrusel";

const images = Object.values(
  import.meta.glob("../assets/caballeros/*.jpg", { eager: true })
).map((module) => module.default);

const imagesMujeres = Object.values(
  import.meta.glob("../assets/mujeres/*.jpg", { eager: true })
).map((module) => module.default);

const imagesKids = Object.values(
  import.meta.glob("../assets/kids/*.jpg", { eager: true })
).map((module) => module.default);

const imagesTrabajo = Object.values(
  import.meta.glob("../assets/trabajo/*.jpg", { eager: true })
).map((module) => module.default);
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const numero = isMobile
  ? 2
  : 4;

function Products() {
  return (
    <section id="products">
      <div>
        <h1>Nuestros productos</h1>
        <ul className="product-list">
          <li>Zapato para Caballeros</li>
              <ImageCarousel images={images} ancho="85%" numero={numero}/>
          <li>Zapato para Damas</li>
              <ImageCarousel images={imagesMujeres} ancho="80%" numero={numero}/>
          <li>Zapato para Niños</li>
              <ImageCarousel images={imagesKids} ancho="80%" numero={numero}/>
          <li>Calzado Industrial</li>
              <ImageCarousel images={imagesTrabajo} ancho="80%" numero={numero}/>
        </ul>
      </div>
    </section>
  );
}

export default Products;
