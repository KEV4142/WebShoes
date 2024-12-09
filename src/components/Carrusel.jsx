import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ images,ancho="80%" }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "20px",
  };

  return (
    <div className="carousel-container" style={{ maxWidth: "800px", margin: "10 auto", marginBottom: "40px"}}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: ancho, height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
