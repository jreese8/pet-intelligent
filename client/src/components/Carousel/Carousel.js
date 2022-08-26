import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import fred2Img from "../../assets/Fred2.jpg";
import dracoImg from "../../assets/Draco.png";
import fredImg from "../../assets/Fred.jpg";

function UncontrolledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fred2Img}
          alt="Fred in leaves."
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dracoImg}
          alt="Draco happy."
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fredImg}
          alt="Fred in snow."
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledCarousel;