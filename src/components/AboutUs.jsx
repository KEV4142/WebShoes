import React from "react";
import locationIcon from "../assets/ubicacion.png";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const direccionPrincipal=import.meta.env.VITE_DIRECCION1;
const direccionSucursal=import.meta.env.VITE_DIRECCION2;
function AboutUs() {
  return (
    <section id="about-us" className="common-section bg-light py-5">
      <div className="container">
        <h1 className="text-center mb-4 fw-bold">Sobre Nosotros</h1>
        <p className="text-justify">
          Fundada en 1995, ha calzado a varias generaciones, respaldando su
          trayectoria con productos elaborados por manos 100% hondureñas.
          Calzado San Carlo es un ejemplo de emprendimiento y dedicación,
          comprometido con la calidad y la satisfacción de sus clientes, y con
          una visión clara de crecimiento y expansión en el mercado regional.
        </p>
        <p className="text-justify">
          Con más de 28 años de experiencia en el ramo, implementamos, además,
          la venta por catálogo: una opción ideal para estudiantes, amas de
          casa o personas que también son emprendedoras, con deseos de generar
          ingresos extra.
        </p>
        <blockquote className="blockquote text-center my-4">
          <p className="fw-bold fst-italic">
            "La idea, comiénzala ya. Organízate con lo que tienes, ponle pasión.
            Las crisis, con actitud, son oportunidades. Dios te ha dado
            creatividad, aplícala. Piensa, sonríe. El éxito no solo es dinero,
            es el impacto que generas en las personas."
          </p>
        </blockquote>

        <h1 className="text-center mt-5 mb-4 fw-bold">Tiendas</h1>
        <div className="row gy-4">
          <div className={`${isMobile ? "col-md-6 border-dark" : "col-md-6 border-end border-dark" } `}>
            <h5 className="text-center fw-bold">
              <a
                href={direccionPrincipal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <img
                  src={locationIcon}
                  alt="Ubicación"
                  style={{
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    marginRight: "8px",
                  }}
                />
                Fábrica y tienda principal
              </a>
            </h5>
            <p className="text-muted">
              20 calle 4 y 5 avenida NE, Avenida Junior, San Pedro Sula, Cortés
            </p>
            <p className="text-muted">
              <strong>Horario:</strong> Lunes a viernes 8am a 5pm, Sábado de
              8am a 12pm
            </p>
          </div>

          <div className="col-md-6">
            <h5 className="text-center fw-bold">
              <a
                href={direccionSucursal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <img
                  src={locationIcon}
                  alt="Ubicación"
                  style={{
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    marginRight: "8px",
                  }}
                />
                Kiosko ubicado en pasillo de Walmart
              </a>
            </h5>
            <p className="text-muted">
              San Pedro Sula, Bulevar del Norte, salida a Puerto Cortés.
            </p>
            <p className="text-muted">
              <strong>Horario:</strong> Lunes a sábado 1pm a 7pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
