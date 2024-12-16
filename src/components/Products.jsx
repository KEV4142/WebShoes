import React from "react";
import ImageCarousel from "./Carrusel";

const images = Object.values(
  import.meta.glob("../assets/caballeros/*.webp", { eager: true })
).map((module) => module.default);

const imagesMujeres = Object.values(
  import.meta.glob("../assets/mujeres/*.webp", { eager: true })
).map((module) => module.default);

const imagesKids = Object.values(
  import.meta.glob("../assets/kids/*.webp", { eager: true })
).map((module) => module.default);

const imagesTrabajo = Object.values(
  import.meta.glob("../assets/trabajo/*.webp", { eager: true })
).map((module) => module.default);
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const numero = isMobile
  ? 2
  : 4;

function Products() {
  return (
    <section id="products" className="common-section bg-light py-5">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">Nuestros Productos</h1>
        <div className="row gy-5">
          <div className="col-12">
            <h2 className="text-center">Zapato para Caballeros</h2>
            <ImageCarousel images={images} ancho="95%" numero={numero} />
            <div className="border-top mt-4 mb-4"></div>
          </div>
          <div className="col-12">
            <h2 className="text-center">Zapato para Damas</h2>
            <ImageCarousel images={imagesMujeres} ancho="90%" numero={numero} />
            <div className="border-top mt-4 mb-4"></div>
          </div>
          <div className="col-12">
            <h2 className="text-center">Zapato para Niños</h2>
            <ImageCarousel images={imagesKids} ancho="90%" numero={numero} />
            <div className="border-top mt-4 mb-4"></div>
          </div>
          <div className="col-12">
            <h2 className="text-center">Calzado Industrial</h2>
            <ImageCarousel images={imagesTrabajo} ancho="90%" numero={numero} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
