import React from "react";

function AboutUs() {
  return (
    <section id="about-us">
      <div>
        <h1>Sobre Nosotros</h1>
        <p>
        Fundada en 1995, ha calzado a varias generaciones, respaldando su trayectoria con productos elaborados por manos 100% hondureñas. 
        Calzado San Carlo es un ejemplo de emprendimiento y dedicación, comprometido con la calidad y la satisfacción de sus clientes, 
        y con una visión clara de crecimiento y expansión en el mercado regional.
        </p>
        <h1>Tiendas</h1>
        <p>
        <strong>
        <a
        href="https://maps.google.com/maps/search/Calzado+San+Carlo%2C+Boulevard+Moraz%C3%A1n%2C+San+Pedro+Sula%2C+Honduras"
        target="_blank"
        rel="noopener noreferrer"
        style={{  color: "#555", textDecoration: "none" }}
        >Fabrica y tienda principal</a></strong>, 20 calle 4 y 5 avenida NE, Avenida Junior, San Pedro Sula, Cortés
        </p>
        <p>Horario: Lunes a viernes 8am a 5pm, Sábado de 8am a 12pm</p>
        <br></br>
        <p>
        <strong>
        <a
        href="https://maps.google.com/maps/search/Walmart+San+Pedro+Sula"
        target="_blank"
        rel="noopener noreferrer"
        style={{  color: "#555", textDecoration: "none" }}
        >Kiosko ubicado en pasillo de Walmart</a></strong> San Pedro Sula, Bulevar del Norte, salida a Puerto Cortés.
        </p>
        <p>Horario: Lunes a sábado 1pm a 7pm</p>
      </div>
    </section>
  );
}

export default AboutUs;
