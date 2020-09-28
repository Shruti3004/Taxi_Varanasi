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
    // mobileFirst: true,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    // dots: true,
    centerMode: true,
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

  const slidesData = [
    {
      id: 1,
      title: "repellendus id ullam",
      label: "Dolorem officiis temporibus.",
    },
    {
      id: 2,
      title: "excepturi consequatur est",
      label: "Officia non provident dolor esse et neque.",
    },
    {
      id: 3,
      title: "eius doloribus blanditiis",
      label: "Ut recusandae vel vitae molestiae id soluta.",
    },
    {
      id: 4,
      title: "nihil voluptates delectus",
      label: "Qui vel consequatur recusandae illo repellendus.",
    },
    {
      id: 5,
      title: "nemo dolorem necessitatibus",
      label: "Placeat odit velit itaque voluptatem.",
    },
    {
      id: 6,
      title: "dolorem quibusdam quasi",
      label: "Adipisci officiis repudiandae.",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12 col-12 mb-5 mx-auto">
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
            {/* <img className="slick-slide-image img-fluid w-100" src={auto} /> */}
          </Slider>
        </div>
      </div>
      <div className="col-lg-10 col-md-12 col-sm-12 col-12 mb-5 mx-auto">
        <div className="slider-wrapper">
          <div className="thumbnail-slider-wrap">
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
          </div>
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={(slider) => setSlider1(slider)}
          >
            {slidesData.map((slide) => (
              <div className="slick-slide" key={slide.id}>
                <h2 className="slick-slide-title">{slide.title}</h2>
                <img
                  className="slick-slide-image img-fluid pb-5 w-100"
                  src={auto}
                />
                {/* src={`https://picsum.photos/800/400?img=${slide.id}`} */}
                <label className="slick-slide-label">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="active text-white py-1">
                            <p className="my-0 py-1">City Ride</p>
                          </th>
                          <th className="active text-white py-1">
                            <p className="my-0 py-1">Outstation</p>
                          </th>
                          <th className="active text-white py-1">
                            <p className="my-0 py-1">Airport</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="bg-white text-blue py-1">
                            <p className="my-0">&#x20B9;2000/day</p>
                          </td>
                          <td className="bg-white text-blue py-1">
                            <p className="my-0">&#x20B9;10/km</p>
                          </td>
                          <td className="bg-white text-blue py-1">
                            <p className="my-0">&#x20B9;800</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </label>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default NewHomePage;
