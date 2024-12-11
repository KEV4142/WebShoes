import React from "react";
import locationIcon from '../assets/ubicacion.png'

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
        <p>
        Con más de 28 años de experiencia en el ramo, implementamos, además, la venta por catálogo: una opción ideal para estudiantes, amas de casa o personas que también son emprendedoras, con deseos de generar ingresos extra.
        </p>
        <p class="bold-italic">
        "La idea, comiénzala ya. Organízate con lo que tienes, ponle pasión. Las crisis, con actitud, son oportunidades. Dios te ha dado creatividad, aplícala. Piensa, sonríe. El éxito no solo es dinero, es el impacto que generas en las personas."
        </p>
        <h1>Tiendas</h1>
        <p>
        <strong>
        <a
        href="https://maps.google.com/maps/search/Calzado+San+Carlo%2C+Boulevard+Moraz%C3%A1n%2C+San+Pedro+Sula%2C+Honduras"
        target="_blank"
        rel="noopener noreferrer"
        style={{  color: "#555", textDecoration: "none" }}
        >
        <img src={locationIcon} alt="Ubicación" style={{
          width: "16px",
          height: "16px",
          verticalAlign: "middle",
          marginRight: "8px",
        }}/>
          Fabrica y tienda principal</a>
        
        </strong>, 20 calle 4 y 5 avenida NE, Avenida Junior, San Pedro Sula, Cortés
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
        >
        <img src={locationIcon} alt="Ubicación" style={{
          width: "16px",
          height: "16px",
          verticalAlign: "middle",
          marginRight: "8px",
        }}/>  
          Kiosko ubicado en pasillo de Walmart</a></strong> San Pedro Sula, Bulevar del Norte, salida a Puerto Cortés.
        </p>
        <p>Horario: Lunes a sábado 1pm a 7pm</p>
      </div>
    </section>
  );
}

export default AboutUs;
