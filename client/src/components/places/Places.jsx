import React, { useEffect, useState } from "react";
import "./places.css";
import Varanasi from "../../images/varanasi.jpg";
import SubDetails from "../mutual/SubDetails";
import axios from "axios";

function Places() {
  const [data, setData] = useState({});
  const dataPlaces = async () => {
    try {
      var url = "/dataPlaces";
      var request = {
        url,
        method: "get",
      };
      const res = await axios(request);
      const places = await res.data;
      setData(places);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dataPlaces();
  }, []);

  const { title, article } = data;
  return (
    <React.Fragment>
      <img src={Varanasi} alt="Varanasi" className="img-fluid" />
      <div className="container">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12 grey-open-sans-text">
          <h1 className="main-heading mt-4">{title}</h1>
          {article
            ? article.map((subDetails) => {
                return (
                  <SubDetails key={subDetails.id} subDetails={subDetails} />
                );
              })
            : ""}
          <h2 className="places-last-heading mt-4">
            Hire cab for Top 10 Tourist destinations in Varanasi at Minimum
            cost.
          </h2>
          <hr />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Places;
