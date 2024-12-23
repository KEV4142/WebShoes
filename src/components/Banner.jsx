import React from "react";

function Banner({ image }) {
  return (
    <section className="banner">
      <div className="container-fluid p-0">
        <img
          src={image}
          alt="Banner"
          className="img-fluid banner-image"
          style={{ marginTop: "115px",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </section>
  );
}

export default Banner;
