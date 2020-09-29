import React, { useState, useEffect, useContext } from "react";
import "./newHomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import auto from "../../images/sedenCard.png";
import { DetailsContext } from "../../context/context";

function NewHomePage() {
  const { newHome } = useContext(DetailsContext);
  const { article } = newHome;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    asNavFor: ".slider-nav",
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12 col-12 mb-5 mt-3 mx-auto">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {article.map((slide) => (
              <div className="slick-slide" key={slide.id}>
                <img
                  className="slick-slide-image-thumbnail img-fluid "
                  src={slide.image}
                  height="50"
                  width="50"
                />
              </div>
            ))}
          </Slider>
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={(slider) => setSlider1(slider)}
          >
            {article.map((slide) => (
              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image img-fluid w-100" src={auto} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="row no-gutters mb-3">
        <div className="col-lg-3 col-md-3 col-5 col-sm-5 mx-auto">
          <div className="book-now-new text-white font-weight-bold active text-center py-2">
            Book Now
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-5 col-sm-5 mx-auto">
          <div className="call-now text-blue bg-white font-weight-bold text-center py-2">
            Call Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHomePage;
