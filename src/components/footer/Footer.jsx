// import React from 'react'
// import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    {
      id: 1,
      name: "Electrical Engineering",
      image: "electrical.jpg",
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      image: "mechanical.jpg",
    },
    {
      id: 3,
      name: "Civil Engineering",
      image: "civil.jpg",
    },
  ];

  return (
    <footer className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Office Contact</h2>
              <p className="text-uppercase">
                <i className="fa fa-map-marker-alt" />
                Blue Heights, Level 3 Nkrumah Rd
              </p>
              <p className="text-uppercase">
                <a href="tel:+256 776024658">
                  <i className="fa fa-phone-alt" />
                  +256 776024658
                </a>
              </p>
              <p className="text-uppercase">
                <a href="tel:+256774764199">
                  <i className="fa fa-phone-alt" />
                  +256774764199
                </a>
              </p>
              <p className="text-uppercase">
                <a href="tel:+256708881648">
                  <i className="fa fa-phone-alt" />
                  +256708881648
                </a>
              </p>
              <p className="">
                <a href="mailto:cubeengineeringlimited@gmail.com">
                  <i className="fa fa-envelope" />
                  cubeengineeringlimited@gmail.com
                </a>
              </p>
              <div className="footer-social">
                <a
                  target="_blank"
                  href="https://twitter.com/CubeEngineers?s=20&t=YOPh578w5sA3VX3KHRhieg"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.linkedin.com/company/cube-engineering-and-general-supplies-limited/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a target="_blank" href="https://mail.google.com" rel="noreferrer">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Services Areas</h2>
              {services.map((service) => (
                <a href="{{ route('services.show', $service->id) }}" className="text-uppercase">
                  {service.name}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <a className="text-uppercase" href="#about">
                About Us
              </a>
              <a className="text-uppercase" href="#contact">
                Contact Us
              </a>
              <a className="text-uppercase" href="#projects">
                Projects
              </a>
              <a className="text-uppercase" href="#testimonials">
                Testimonial
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-menu">
        <div className="f-menu">
          <a className="text-uppercase" href="{{ route('terms') }}">
            Terms of use
          </a>
          <a className="text-uppercase" href="{{ route('privacy') }}">
            Privacy policy
          </a>
        </div>
      </div>
      <div className="container copyright">
        {/* <div className="row">
          <div className="col-md-6">
            <p className="text-uppercase">
              &copy; <a href="{{ route('home') }}">Cube Engineering @php echo date('Y'); @endphp</a>
              , All Right Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-uppercase">
              Designed By <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
