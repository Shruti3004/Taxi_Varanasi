import React, { useEffect, useState } from "react";
import "./about.css";
import Varanasi from "../../images/varanasi.jpg";
import SubDetails from "../mutual/SubDetails";
import axios from "axios";

function About() {
  const [data, setData] = useState({});
  const dataAbout = async () => {
    try {
      var url = "/dataAbout";
      var request = {
        url,
        method: "get",
      };
      const res = await axios(request);
      const aboutf = await res.data;
      setData(aboutf);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dataAbout();
  }, []);

  const { title, intro, article } = data;
  return (
    <React.Fragment>
      <img src={Varanasi} alt="Varanasi" className="img-fluid" />
      <div className="container">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12 grey-open-sans-text">
          <h1 className="main-heading mt-4">{title}</h1>
          {intro
            ? intro.map((introdetail, index) => {
                return <p key={index}>{introdetail}</p>;
              })
            : ""}
          {article
            ? article.map((subDetails) => {
                return (
                  <SubDetails key={subDetails.id} subDetails={subDetails} />
                );
              })
            : ""}
          <h2 className="about-last-heading mt-4">
            Hire cab for About us - Book a Taxi or Car Hire services in Varanasi
            at Minimum cost.
          </h2>
          <hr />
          <div className="blog-post mb-3 mt-0">
            <i className="fas fa-user" /> 4500+ pickups&nbsp;&nbsp;&nbsp;
            <i className="fas fa-calendar" /> We will wait for
            you&nbsp;&nbsp;&nbsp;
            <i className="fas fa-comment" /> Fastest Cab in
            Varanasi&nbsp;&nbsp;&nbsp;
            <i className="fas fa-heart" /> 5 favourites&nbsp;&nbsp;&nbsp;
            <i className="fas fa-eye" /> 1.128k views
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
