import React, { useState, useEffect, useContext } from "react";
import "./newHomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../../images/photo1.jpeg";
import photo2 from "../../images/photo2.jpeg";
import photo3 from "../../images/photo3.jpeg";
import photo4 from "../../images/photo4.jpeg";
import photo5 from "../../images/photo5.jpeg";
import photo6 from "../../images/photo6.jpeg";
import photo7 from "../../images/photo7.jpeg";
import { DetailsContext } from "../../context/context";
import Carousel from "react-bootstrap/Carousel";

function NewHomePage() {
  const [collection , setCollection] = useState('')
const quotes = [
  "Take your touring experience to another level",
  "Fasten your seat belts and brace yourself",
  "Be the first one in town to get on board with us",
  "Planning a trip to varansi? Do it with taxi in varanasi",
  "Get the best out of an unplanned trip with us",
  "We partnered up with city's top car and best can driver to give you an amazing experience round the town",
  "Enjoy a hassle free ride in our frequently sanitized cabs",
  "Panic mode : OFF! ❌ ESSENTIALS ARE ON! ✔️",
];
useEffect(() => {
  const interval = setInterval(() => {
    setQuote()
   }, 5000);
   return() => {
     clearInterval(interval)
   }
},)


const setQuote = () => {
  const rand = Math.floor(Math.random() * (7 - 0)) + 0;
  setCollection(quotes[rand])
}
  const { newHome } = useContext(DetailsContext);
  const { article } = newHome;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
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

  return (
    <React.Fragment>
      <div className="text-dark text-center py-2 quote">{collection}</div>
      {/* <section>
        <div className="icons">
          <div className="loop">
            <div className="span one">
              <img src={photo1} />
            </div>
            <div className="span two">
              <img src={photo2} />
            </div>
            <div className="span three">
              <img src={photo3} />
            </div>
            <div className="span four">
              <img src={photo4} />
            </div>
            <div className="span five">
              <img src={photo5} />
            </div>
            <div className="span six">
              <img src={photo6} />
            </div>
            <div className="span seven">
              <img src={photo7} />
            </div>
          </div>
          <div className="loop">
            <div className="span one">
              <img src={photo1} />
            </div>
            <div className="span two">
              <img src={photo2} />
            </div>
            <div className="span three">
              <img src={photo3} />
            </div>
            <div className="span four">
              <img src={photo4} />
            </div>
            <div className="span five">
              <img src={photo5} />
            </div>
            <div className="span six">
              <img src={photo6} />
            </div>
            <div className="span seven">
              <img src={photo7} />
            </div>
          </div>
        </div>
      </section> */}
      <div className="carousel-custom">
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
        {article.map(slide => (
          <Carousel.Item className="carousel-custom">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <div className="card-body py-2 px-0 pt-0">
                      <img
                        className="slick-slide-image img-fluid w-100 p-3"
                        src={slide.image}
                      />
                    </div>
                  </div>
                </div>              
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr className="pb-0">
                              <th className="active">
                                <p className="text-center text-white py-0 my-0">
                                  City Ride
                                </p>
                              </th>
                              <th className="active">
                                <p className="text-center text-white py-0 my-0">
                                  Outstation
                                </p>
                              </th>
                              <th className="active">
                                <p className="text-center text-white py-0 my-0">
                                  Airport
                                </p>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="pb-0">
                              <td className="bg-white">
                                <p className="text-center font-weight-bold text-blue py-0 my-0">
                                  &#x20B9;2000km/day
                                </p>
                              </td>
                              <td className="bg-white">
                                <p className="text-center font-weight-bold text-blue py-0 my-0">
                                  &#x20B9;10km/hr
                                </p>
                              </td>
                              <td className="bg-white">
                                <p className="text-center font-weight-bold text-blue py-0 my-0">
                                  &#x20B9;800
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                </div>              
              </div>                        
          </Carousel.Item>
        ))}    
        </Carousel>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-5 mt-3 mx-auto">
            <Slider
              {...settingsMain}
              asNavFor={nav2}
              ref={(slider) => setSlider1(slider)}
            >
              {article.map((slide) => (
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    {/* <div className="slick-slide" key={slide.id}> */}
                      <div className="card">
                        <div className="card-body py-2 px-0 pt-0">
                          <img
                            className="slick-slide-image img-fluid w-100 p-3"
                            src={slide.image}
                          />
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr className="pb-0">
                              <th className="active">
                                <p className="text-center text-white py-0 my-0">
                                  City Ride
                                </p>
                              </th>
                              <th className="active">
                                <p className="text-center text-white py-0 my-0">
                                  Outstation
                                </p>
                              </th>
                              <th className="active">
                                <p className="text-center text-white py-0 my-0">
                                  Airport
                                </p>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="pb-0">
                              <td className="bg-white">
                                <p className="text-center font-weight-bold text-blue py-0 my-0">
                                  &#x20B9;2000km/day
                                </p>
                              </td>
                              <td className="bg-white">
                                <p className="text-center font-weight-bold text-blue py-0 my-0">
                                  &#x20B9;10km/hr
                                </p>
                              </td>
                              <td className="bg-white">
                                <p className="text-center font-weight-bold text-blue py-0 my-0">
                                  &#x20B9;800
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                </div>
                // <div className="slick-slide" key={slide.id}>
                //   <div className="card">
                //     <div className="card-body py-2 px-0 pt-0">
                //       <img
                //         className="slick-slide-image img-fluid w-100 p-5"
                //         src={slide.image}
                //       />
                //       <div className="table-responsive">
                //         <table className="table table-bordered">
                //           <thead>
                //             <tr className="pb-0">
                //               <th className="active">
                //                 <p className="text-center text-white py-0 my-0">
                //                   City Ride
                //                 </p>
                //               </th>
                //               <th className="active">
                //                 <p className="text-center text-white py-0 my-0">
                //                   Outstation
                //                 </p>
                //               </th>
                //               <th className="active">
                //                 <p className="text-center text-white py-0 my-0">
                //                   Airport
                //                 </p>
                //               </th>
                //             </tr>
                //           </thead>
                //           <tbody>
                //             <tr className="pb-0">
                //               <td className="bg-white">
                //                 <p className="text-center font-weight-bold text-blue py-0 my-0">
                //                   &#x20B9;2000km/day
                //                 </p>
                //               </td>
                //               <td className="bg-white">
                //                 <p className="text-center font-weight-bold text-blue py-0 my-0">
                //                   &#x20B9;10km/hr
                //                 </p>
                //               </td>
                //               <td className="bg-white">
                //                 <p className="text-center font-weight-bold text-blue py-0 my-0">
                //                   &#x20B9;800
                //                 </p>
                //               </td>
                //             </tr>
                //           </tbody>
                //         </table>
                //       </div>
                //     </div>
                //   </div>
                  // <div className="slick-slide-label"></div>
                // </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="row no-gutters mb-3">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12 mx-auto">
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-6 col-6 col-sm-6 mx-auto">
                <div className="book-now-new text-white font-weight-bold active text-center py-2">
                  Book Now
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6 col-sm-6 mx-auto">
                <div className="call-now text-blue bg-white font-weight-bold text-center py-2">
                  Call Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewHomePage;
