import React from "react";


function Banner({ image }) {
  return (
    <section className="banner">
      <img src={image} alt="Banner" className="banner-image" style={{ marginTop: '100px' }} />
    </section>
  );
}

export default Banner;
