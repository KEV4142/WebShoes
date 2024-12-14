import React from "react";

function Banner({ image }) {
  return (
    <section className="banner">
      <div className="container-fluid p-0">
        <img
          src={image}
          alt="Banner"
          className="img-fluid banner-image"
          style={{ marginTop: "100px"}}
        />
      </div>
    </section>
  );
}

export default Banner;
