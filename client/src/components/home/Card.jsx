import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ article }) {
  const {
    image,
    imageBlog,
    heading,
    paragraph,
    subHeading,
    blogPost,
  } = article;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="row no-gutters">
              <div className="col-lg-1 col-md-1 col-sm-1 col-1 pt-4 pr-0 mr-0">
                <i className="fab fa-twitter fa-2x py-2 text-white text-center w-100" />
                <i className="fab fa-google fa-2x py-2 text-white text-center w-100" />
                <i className="fab fa-facebook-f fa-2x py-2 text-white text-center w-100" />
                <i className="fas fa-envelope-open fa-2x py-2 text-white text-center w-100" />
                <i className="fas fa-plus fa-2x py-2 text-white text-center w-100" />
              </div>
              <div className="col-lg-11 col-md-11 col-sm-11 col-11">
                <div className="card p-4 mb-4">
                  <div className="img-block">
                    <img
                      src={image}
                      className="card-img-top img-fluid rounded"
                      alt="product"
                    />                    
                    <div className="blog text-white font-weight-bold">
                      {imageBlog}
                    </div>
                  </div>
                  <div className="card-footer px-0 pb-0">
                    <h3>
                      <a href="/" className="heading font-weight-bold ">
                        {heading}
                      </a>
                    </h3>
                    <p className="card-paragraph p-0">
                      {paragraph}
                      <Link to="/places">
                        <span className="text-success">...Read More</span>
                      </Link>
                      <h4 className="sub-heading mt-3">{subHeading}</h4>
                    </p>
                    <hr />
                  </div>
                  <div className="blog-post mb-3">
                    <i className="fas fa-user" /> {blogPost[0]}&nbsp;&nbsp;
                    <i className="fas fa-calendar" /> {blogPost[1]}&nbsp;&nbsp;
                    <i className="fas fa-comment" /> {blogPost[2]}&nbsp;&nbsp;
                    <i className="fas fa-heart" /> {blogPost[3]}&nbsp;&nbsp;
                    <i className="fas fa-eye" /> {blogPost[4]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
