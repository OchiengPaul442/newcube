// import React from "react";
// import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="{{ route('home') }}">
              <img src="{{ asset('images/Group 53.png') }}" width="150px" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div
                className="d-flex justify-content-between"
                style={{
                  width: "100%",
                }}
              >
                <ul className="navbar-nav" id="navbar-item-tracker">
                  <a href="#home" className="nav-item nav-link">
                    Home
                  </a>
                  <a href="#about" className="nav-item nav-link">
                    About
                  </a>
                  <a href="#services" className="nav-item nav-link">
                    Services
                  </a>
                  <a href="#portfolio" className="nav-item nav-link">
                    Projects
                  </a>
                  <a href="#FAQs" className="nav-item nav-link">
                    FAQs
                  </a>
                  <a href="#contact" id="contact-btn-nav-1" className="nav-item nav-link">
                    Contact
                  </a>
                  <a href="#partners" className="nav-item nav-link">
                    Partners
                  </a>
                </ul>
                <a href="#contact" id="contact-btn-nav-2" className="nav-item nav-link">
                  <button type="button" className="btn btn-outline-warning">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
