import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {
  Carousel,
  Contact,
  // Portfolio,
  Services,
  Partners,
  TimeLine,
  // Testimonials,
  FAQs,
} from '../components';
import Page from '../layout/Page';
import Image1 from '../assets/images/vision.jpg';
import Image2 from '../assets/images/augst 002.jpg';
import Image3 from '../assets/images/1663739612016 1.jpg';
import Image4 from '../assets/images/SEPT 02.jpg';
import Image5 from '../assets/images/Premium Photo Future building construction engineering project_.jpg';

const Home = () => {
  const [open, setOpen] = React.useState('mission');

  return (
    <Page>
      <Carousel />
      <div className="feature wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-worker" />
                </div>
                <div className="feature-text">
                  <h3>Expert Worker</h3>
                  <TaskAltIcon sx={{ color: '#ff9c36', fontSize: 45 }} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-building" />
                </div>
                <div className="feature-text">
                  <h3>Quality Work</h3>
                  <TaskAltIcon sx={{ color: '#ff9c36', fontSize: 45 }} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-call" />
                </div>
                <div className="feature-text">
                  <h3>24/7 Support</h3>
                  <TaskAltIcon sx={{ color: '#ff9c36', fontSize: 45 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="about">
        <div className="about-container-wrapper">
          <div id="about" className="about wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                  <div className="about-img">
                    <img src={Image5} alt="pic-2" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="section-header text-left">
                    <h2 className="fw-bold mb-2">Cube Engineering And General Supplies Limited</h2>
                    <small>SERVE YOU BETTER</small>
                    <div className="Line mt-4 mb-4" />
                    <p>About Us</p>
                  </div>
                  <div className="about-text">
                    <p>
                      Cube Engineering and General Supplies Ltd is a multi-disciplinary engineering
                      firm duly registered as a limited Company with an aim to provide quality
                      services in the industry. Cube Engineering was founded on 7th March 2021 and
                      incorporated on 14th July 2021 in Kampala Uganda.
                      <br />
                      <br />
                      Since its inception it has been at the forefront of providing a wide range of
                      engineering services ranging from routine maintenance, Heavy duty machinery
                      overhauls to turn key project management, implementation and Execution. Cube
                      Engineering’s expertise has been developed from former employees of different
                      organizations who have been involved in execution of number of construction,
                      mechanical and electrical projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="About_sec wow fadeInUp" id="about" data-wow-delay="0.2s">
            <div className="Center">
              <h3>More about us</h3>
              <div className="Line mt-4" />
              <div className="Tabside">
                <ul>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        return setOpen('mission');
                      }}
                      className={`text-dark tabLink ${open === 'mission' ? 'activeLink' : ''}`}
                      id="cont-1"
                    >
                      Mission
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen('vision');
                      }}
                      className={`text-dark tabLink ${open === 'vision' ? 'activeLink' : ''}`}
                      id="cont-2"
                    >
                      vision
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen('values');
                      }}
                      className={`text-dark tabLink ${open === 'values' ? 'activeLink' : ''}`}
                      id="cont-3"
                    >
                      Values
                    </button>
                  </li>
                </ul>
                <div className="clear" />
                {open === 'mission' && (
                  <div className="tabcontent" id="cont-1-1">
                    <div className="TabImage">
                      <div className="img1">
                        <figure>
                          <img src={Image1} alt="pic-2" />
                        </figure>
                      </div>
                      <div className="img2">
                        <figure>
                          <img src={Image3} alt="pic-2" />
                        </figure>
                      </div>
                    </div>
                    <div className="Description">
                      <h3>Our Mission</h3>
                      <p>
                        To be the leader in offering the highest degree of technical and operational
                        efficiency for our clients through provision of high quality engineering
                        work.
                      </p>
                    </div>
                  </div>
                )}
                {open === 'vision' && (
                  <div className="tabcontent" id="cont-2-1">
                    <div className="TabImage">
                      <div className="img1">
                        <figure>
                          <img src={Image1} alt="pic-2" />
                        </figure>
                      </div>
                      <div className="img2">
                        <figure>
                          <img src={Image2} alt="pic-2" />
                        </figure>
                      </div>
                    </div>
                    <div className="Description">
                      <h3>Our Vision</h3>
                      <p>
                        To be the leading Services Provider in the engineering sector with high
                        focus on Customer Satisfaction
                      </p>
                    </div>
                  </div>
                )}
                {open === 'values' && (
                  <div className="tabcontent" id="cont-3-1">
                    <div className="TabImage">
                      <div className="img1">
                        <figure>
                          <img src={Image1} alt="pic-2" />
                        </figure>
                      </div>
                      <div className="img2">
                        <figure>
                          <img src={Image4} alt="pic-2" />
                        </figure>
                      </div>
                    </div>
                    <div className="Description">
                      <h3>Our Core Values</h3>
                      <p>
                        <h4>Integrity:</h4>
                        <span>Honesty and strong moral principles.</span>
                      </p>
                      <p>
                        <h4>Customer Satisfaction:</h4>
                        <span>Exceed customer expectations.</span>
                      </p>
                      <p>
                        <h4>Professionalism:</h4>
                        <span>
                          Skill, good judgement and individual adherence to the set standards.
                        </span>
                      </p>
                      <p>
                        <h4>Innovation:</h4>
                        <span>Take pro-active steps to drive performance.</span>
                      </p>
                      <p>
                        <h4>Teamwork:</h4>
                        <span>Collaborate with others to achieve company goals.</span>
                      </p>
                    </div>
                  </div>
                )}
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="facts">
        <div className="fact">
          <div className="container-fluid">
            <div className="row counters">
              <div className="col-md-6 fact-left wow slideInLeft">
                <div className="row">
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-worker" />
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">16</h2>
                      <p>Expert Workers</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-building" />
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">29</h2>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 fact-right wow slideInRight">
                <div className="row">
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-address" />
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">29</h2>
                      <p>Completed Projects</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-crane" />
                    </div>
                    <div className="fact-text">
                      <span className="d-flex gap-2">
                        <h2 data-toggle="counter-up">10</h2>
                        <span className="fs-3">+</span>
                      </span>
                      <p>Running Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      {/* <Portfolio /> */}
      <FAQs />
      {/* <Testimonials /> */}
      <Contact />
      <Partners />
      <TimeLine />
      <section>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7594577220207!2d32.58001141521419!3d0.31122996411729714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbdd0eca93c03%3A0x38c6dc5b1d215262!2sBlue%20Heights!5e0!3m2!1sen!2sug!4v1663617359157!5m2!1sen!2sug"
          width="100%"
          height="600"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt5"
        />
      </section>
      <a href="$" className="back-to-top">
        <i className="fa fa-chevron-up" />
      </a>
    </Page>
  );
};

export default Home;
