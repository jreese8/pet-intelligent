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
        <h1 className="text-center pt-5">About Us</h1>
        <h4 className="section"> Pet Intelligent is a local pet retailer with a variety of products geared towards pets and their families. At Pet Intelligent, we love pets, and we believe pets make us better people! Every day with every connection, Pet Intelligent's passionate associates help bring pet parents closer to their pets so they, together, can live more fulfilled lives.
          <br/>
          <br/>
          This vision impacts everything we do for our customers, the way we support our associates and how we give back to our communities. Shop online or visit our store using the map below. We look forward to serving you and your precious pets!
        </h4>
        <Map location={location} zoomLevel={15} />
    </div>
  )
}

export default Home;