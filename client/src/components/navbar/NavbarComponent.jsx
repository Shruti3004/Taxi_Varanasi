import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="nav-background py-0" sticky="top">
        <Navbar.Brand href="/">
          <span className="text-white font-weight-bold">Taxi in Varanasi</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact to="/" activeClassName="active">
              <Nav.Link
                href="/"
                className="text-uppercase px-3 font-weight-bold navbar-item
                  text-white text-center"
              >
                Home
              </Nav.Link>
            </NavLink>
            <NavLink to="/kashiVishwanath" activeClassName="active">
              <Nav.Link
                href="/kashiVishwanath"
                className="text-uppercase px-3 font-weight-bold navbar-item
                  text-white text-center"
              >
                Kashi Vishwanath
              </Nav.Link>
            </NavLink>
            <NavLink to="/places" activeClassName="active">
              <Nav.Link
                href="/places"
                className="text-uppercase px-3 font-weight-bold navbar-item
                  text-white text-center"
              >
                Top 10 tourist places in Varanasi
              </Nav.Link>
            </NavLink>
            <NavLink to="/carHire" activeClassName="active">
              <Nav.Link
                href="/carHire"
                className="text-uppercase px-3 font-weight-bold navbar-item
                  text-white text-center"
              >
                Car Hire
              </Nav.Link>
            </NavLink>
            <NavLink to="/taxiService" activeClassName="active">
              <Nav.Link
                href="/taxiService"
                className="text-uppercase px-3 font-weight-bold navbar-item
                  text-white text-center"
              >
                Taxi Service
              </Nav.Link>
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              <Nav.Link
                href="/about"
                className="text-uppercase
                  px-3 font-weight-bold navbar-item text-white text-center"
              >
                About Us
              </Nav.Link>
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              <Nav.Link
                href="/contact"
                className="text-uppercase px-3 font-weight-bold navbar-item
                  navbar-item-last mx-auto text-white text-center"
              >
                Contact
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* {console.clear()} */}
    </React.Fragment>
  );
}

export default NavbarComponent;
