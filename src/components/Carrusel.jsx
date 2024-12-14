import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomNextArrow(propiedades) {
  const { className, style, onClick } = propiedades;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(propiedades) {
  const { className, style, onClick } = propiedades;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function Carousel({ images,ancho="80%", numero }) {
  const settings = {
    dots: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: numero,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

return (
  <div className="carousel-container container text-center my-5">
    <div className="row justify-content-center">
      <div className="col-lg-8 col-md-10">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="img-fluid rounded"
                style={{
                  width: ancho,
                  maxWidth: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
);
}
export default Carousel;
