import React from 'react';
import FadeCarousel from "../components/Carousel/Carousel";
import Map from "../components/Map/Map";

const location = {
  address: '6720 Fox Centre Pkwy, Gloucester, VA 23061',
  lat: 37.39791618386544,
  lng: -76.52922297349832,
}

function Home() {
  return (
    <div>
      <FadeCarousel />
      <div>
        <h1>Pet Intelligent</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nibh lectus. Aenean feugiat, libero ut convallis vestibulum, mi nibh posuere lectus, a sodales metus neque sit amet tortor. Integer blandit quam et leo scelerisque tristique. Donec ac lobortis eros. Aliquam malesuada venenatis efficitur. Fusce suscipit ullamcorper libero vitae egestas. Ut id magna non nunc vehicula auctor. Sed nec dolor ut purus varius malesuada. Proin commodo, nulla at imperdiet vehicula, sem erat bibendum felis, id gravida velit ex ac magna.</p>
      </div>
        <Map location={location} zoomLevel={15} />
    </div>
  )
}

export default Home;