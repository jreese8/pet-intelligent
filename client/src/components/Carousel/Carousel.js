import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import dogcatImg from "../../assets/dogncat.png";
import dogcat2Img from "../../assets/dogncat2.jpg";
import dogcat3Img from "../../assets/dogncat3.png";

function FadeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={dogcatImg}
          alt="Dog with cat."
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={dogcat2Img}
          alt="Dog with cat."
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={dogcat3Img}
          alt="Dog with cat."
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default FadeCarousel;