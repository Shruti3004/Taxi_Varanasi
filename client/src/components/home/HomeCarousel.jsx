import React, { useState } from "react";
import car from "../../images/car.png";
import aarti from "../../images/aarti.jpg";
import gangaGhat from "../../images/gangaGhat.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./homeCarousel.css";

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <div className="carousel-custom">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className="carousel-custom">
            <div className="img">
              <img
                src={car}
                alt="Car-Hire-In-Varanasi"
                className="d-block mx-auto img-fluid"
              />
            </div>
            <Carousel.Caption>
              <h3 className="text-white text-center font-weight-bold my-0">
                Airport Pickup/Drop just -/850Rs
              </h3>
              <p className="text-white text-center py-0">
                Get a cab at Varnasi Airport immidiately
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-custom">
            <div className="img">
              <img
                src={gangaGhat}
                alt="Ganga-Ghat-In-Varanasi"
                className="d-block img-fluid w-100"
              />
            </div>
            <Carousel.Caption>
              <h3 className="text-white text-center font-weight-bold my-0">
                Book a cab for Ganga Aarti -/650Rs
              </h3>
              <p className="text-white text-center py-0">
                Pickup from hotel in Varanasi.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-custom my-0">
            <div className="img">
              <img
                src={aarti}
                alt="Ganga-Arti-In-Varanasi"
                className="d-block img-fluid w-100"
              />
            </div>
            <Carousel.Caption className="caption">
              <h3 className="text-white text-center font-weight-bold my-0">
                Ganga Arti
              </h3>
              <p className="text-white text-center py-0">
                We would love to pick you at your place.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
}

export default HomeCarousel;
