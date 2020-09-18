import React from "react";
import "./footerNav.css";

function FooterNav() {
  return (
    <React.Fragment>
      <div className="foot-nav my-0 d-none d-lg-block">
        <div className="container mx-auto">
          <ul className="d-flex justify-content-center">
            <li>
              <a href="/kashiVishwanath">Kashi Darshan</a>
            </li>
            <li>
              <a href="/">Varanasi to Gaya</a>
            </li>
            <li>
              <a href="/">Varanasi to Allahabad</a>
            </li>
            <li>
              <a href="/">Airport to Varanasi</a>
            </li>
            <li>
              <a href="/">BHU </a>
            </li>
            <li>
              <a href="contact">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FooterNav;
