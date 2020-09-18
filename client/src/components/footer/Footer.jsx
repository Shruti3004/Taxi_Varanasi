import React from "react";
import "./footer.css";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-left pb-3">
              <h6>Har Har Mahadev!</h6>
              <p>
                Varanasi is great city since ages and you who come here will be
                equally pure as well. We just want you to know, For any help
                that you may need at any time in varanasi, You can count on us.
              </p>
              <p>Har Har Mahadev!!</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-middle pb-3 px-5">
              <h4>We Love You</h4>
              <div className="mid-btm ">
                <p>
                  If Travelling with 4 people then a sedan would be comfortable,
                  for 6 an Innova is an excellent choice, and Any number of
                  busses are eagerly waiting to welcome you.
                </p>
                <a href="https://www.taxiinVaranasi.in/ ">
                  https://www.taxiinVaranasi.in/
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-right pb-3 px-5">
              <h4>Quick Links</h4>
              <Link to="/">
                <li className="text-white footer-li">
                  Varanasi Airport pickup
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Distance between Varanasi airport to city
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Cab rent from varanasi to Sangam
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Hire cab in Benaras city
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Reserve taxi In varanasi
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Varanasi to Gaya cab rental
                </li>
              </Link>
            </div>
            <div className="clearfix "></div>
          </div>
        </div>
      </div>
      <FooterNav />
      <Copyright />
    </React.Fragment>
  );
}

export default Footer;
