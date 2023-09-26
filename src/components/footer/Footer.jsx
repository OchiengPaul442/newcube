// import React from 'react'
// import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Footer = () => {
  const services = [
    {
      id: 1,
      name: 'Electrical Engineering',
      image: 'electrical.jpg',
    },
    {
      id: 2,
      name: 'Mechanical Engineering',
      image: 'mechanical.jpg',
    },
    {
      id: 3,
      name: 'Civil Engineering',
      image: 'civil.jpg',
    },
  ];

  return (
    <footer className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Office Contact</h2>
              <p className="text-uppercase" style={{ fontSize: '15px' }}>
                <LocationOnIcon sx={{ fontSize: '20px' }} />
                Blue Heights, Level 3 Nkrumah Rd
              </p>
              <p className="text-uppercase">
                <a href="tel:+256 776024658">
                  <PhoneIcon />
                  +256 776024658
                </a>
              </p>
              <p className="text-uppercase">
                <a href="tel:+256774764199">
                  <PhoneIcon />
                  +256774764199
                </a>
              </p>
              <p className="text-uppercase">
                <a href="tel:+256708881648">
                  <PhoneIcon />
                  +256708881648
                </a>
              </p>
              <p className="">
                <a href="mailto:info@cubeengineeringltd.com">
                  <EmailIcon />
                  info@cubeengineeringltd.com
                </a>
              </p>
              <div className="footer-social">
                <a
                  target="_blank"
                  href="https://twitter.com/CubeEngineers?s=20&t=YOPh578w5sA3VX3KHRhieg"
                  rel="noreferrer"
                >
                  <TwitterIcon
                    sx={{
                      color: '#fff',
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/cube-engineering-and-general-supplies-limited/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon
                    sx={{
                      color: '#fff',
                    }}
                  />
                </a>
                <a target="_blank" href="https://mail.google.com" rel="noreferrer">
                  <EmailIcon
                    sx={{
                      color: '#fff',
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <a className="text-uppercase" href="#about">
                <ArrowRightIcon sx={{ fontSize: '20px', color: '#fff', marginRight: '10px' }} />
                About Us
              </a>
              <a className="text-uppercase" href="#contact">
                <ArrowRightIcon sx={{ fontSize: '20px', color: '#fff', marginRight: '10px' }} />
                Contact Us
              </a>
              {/* <a className="text-uppercase" href="#projects">
                <ArrowRightIcon sx={{ fontSize: '20px', color: '#fff', marginRight: '10px' }} />
                Projects
              </a>
              <a className="text-uppercase" href="#testimonials">
                <ArrowRightIcon sx={{ fontSize: '20px', color: '#fff', marginRight: '10px' }} />
                Testimonial
              </a> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Services Areas</h2>
              {services.map((service) => {
                return (
                  <a href="#services" className="text-uppercase">
                    <ArrowRightIcon sx={{ fontSize: '20px', color: '#fff', marginRight: '10px' }} />
                    {service.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container footer-menu">
        <div className="f-menu">
          <a className="text-uppercase" href="$">
            Terms of use
          </a>
          <a className="text-uppercase" href="$">
            Privacy policy
          </a>
        </div>
      </div> */}
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p className="text-uppercase">
              <span>&copy;</span>
              <a href="/">{` Cube Engineering ${new Date().getFullYear()}`}</a>
              <span>, All Right Reserved.</span>
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-uppercase">
              <span>Designed By </span>
              <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
