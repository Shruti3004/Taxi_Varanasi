import React from "react";
import "./copyright.css";

function Copyright() {
  return (
    <React.Fragment>
      <div className="copyright my-0">
        <div className="container">
          <p className="text-center">
            © 2018 Travel Portal. All rights reserved | Made with{" "}
            <span role="img" aria-label="heart">
              💖
            </span>{" "}
            at
            <a href="http://www.hackncs.com/" className="text-dark">
              {" "}
              Nibble Labs
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Copyright;
