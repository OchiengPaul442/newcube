// import React from "react";
import Page from "../layout/Page";
import { Carousel, Form } from "../components";
import Image1 from "../assets/images/vision.jpg";
import Image2 from "../assets/images/augst 002.jpg";
import Image3 from "../assets/images/1663739612016 1.jpg";
import Image4 from "../assets/images/SEPT 02.jpg";
import Image5 from "../assets/images/Premium Photo Future building construction engineering project_.jpg";
import Picture1 from "../assets/images/Picture1.png";
import Picture2 from "../assets/images/Picture2.png";
import Picture3 from "../assets/images/Picture3.png";
import Picture4 from "../assets/images/Picture4.png";
import Picture5 from "../assets/images/Picture5.png";
import Picture6 from "../assets/images/Picture6.png";

const Home = () => {
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

  const portfolios = [
    {
      id: 1,
      name: "Electrical Engineering",
      image: "electrical.jpg",
      about: "We offer a wide range of electrical engineering services",
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      image: "mechanical.jpg",
      about: "We offer a wide range of mechanical engineering services",
    },
    {
      id: 3,
      name: "Civil Engineering",
      image: "civil.jpg",
      about: "We offer a wide range of civil engineering services",
    },
    {
      id: 4,
      name: "Electrical Engineering",
      image: "electrical.jpg",
      about: "We offer a wide range of electrical engineering services",
    },
    {
      id: 5,
      name: "Mechanical Engineering",
      image: "mechanical.jpg",
      about: "We offer a wide range of mechanical engineering services",
    },
    {
      id: 6,
      name: "Civil Engineering",
      image: "civil.jpg",
      about: "We offer a wide range of civil engineering services",
    },
  ];

  const FAQs = [
    {
      id: 1,
      question: "What is the company’s vision?",
      answer:
        "To be the leading Services Provider in the engineering sector with high focus on Customer Satisfaction",
    },
    {
      id: 2,
      question: "What is the company's mission?",
      answer: "To provide high-quality engineering services that meet our customers' needs",
    },
    {
      id: 3,
      question: "What services does the company offer?",
      answer:
        "The company offers a wide range of engineering services, including design, construction, and maintenance",
    },
    {
      id: 4,
      question: "Who are the company's clients?",
      answer:
        "Our clients include both private and public sector organizations in various industries",
    },
    {
      id: 5,
      question: "Where is the company located?",
      answer:
        "The company is headquartered in City, Country, with offices in several other locations",
    },
    {
      id: 6,
      question: "How long has the company been in business?",
      answer: "The company has been providing engineering services for over X years",
    },
    {
      id: 7,
      question: "What sets the company apart from its competitors?",
      answer:
        "Our commitment to customer satisfaction and our expertise in the engineering sector set us apart from our competitors",
    },
    {
      id: 8,
      question: "Does the company have any certifications or accreditations?",
      answer:
        "Yes, the company is certified by [Certification Body] and is a member of [Professional Association]",
    },
    {
      id: 9,
      question: "What is the company's approach to sustainability?",
      answer:
        "The company is committed to sustainable practices in all aspects of our work, from design to construction to maintenance",
    },
    {
      id: 10,
      question: "How can I get in touch with the company?",
      answer: "You can contact us via email at info@company.com or call us at (123)456-7890",
    },
  ];

  const testimonials = [
    {
      id: 1,
      customername: "John Doe",
      occupation: "Engineer",
      comments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      image: "testimonial-1.jpg",
    },
    {
      id: 2,
      customername: "John Doe",
      occupation: "Engineer",
      comments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      image: "testimonial-1.jpg",
    },
    {
      id: 3,
      customername: "John Doe",
      occupation: "Engineer",
      comments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      image: "testimonial-1.jpg",
    },
    {
      id: 4,
      customername: "John Doe",
      occupation: "Engineer",
      comments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      image: "testimonial-1.jpg",
    },
    {
      id: 5,
      customername: "John Doe",
      occupation: "Engineer",
      comments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      image: "testimonial-1.jpg",
    },
  ];

  const timelines = [
    {
      id: 1,
      title: "2018",
      image: "timeline-1.jpg",
    },
    {
      id: 2,
      title: "2019",
      image: "timeline-2.jpg",
    },
    {
      id: 3,
      title: "2020",
      image: "timeline-3.jpg",
    },
    {
      id: 4,
      title: "2021",
      image: "timeline-4.jpg",
    },
  ];

  return (
    <Page>
      <Carousel />
      <section className="feature wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-worker" />
                </div>
                <div className="feature-text">
                  <h3>Expert Worker</h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    <a href="$" className="text-dark tabLink activeLink" id="cont-1">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a href="$" className="text-dark tabLink" id="cont-2">
                      vision
                    </a>
                  </li>
                  <li>
                    <a href="$" className="text-dark tabLink" id="cont-3">
                      Values
                    </a>
                  </li>
                </ul>
                <div className="clear" />
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
                      efficiency for our clients through provision of high quality engineering work.
                    </p>
                  </div>
                </div>
                <div className="tabcontent hide" id="cont-2-1">
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
                      To be the leading Services Provider in the engineering sector with high focus
                      on Customer Satisfaction
                    </p>
                  </div>
                </div>
                <div className="tabcontent hide" id="cont-3-1">
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
                      <span>Integrity:</span>
                      <span>Honesty and strong moral principles.</span>
                    </p>
                    <p>
                      <span>Customer Satisfaction:</span>
                      <span>Exceed customer expectations.</span>
                    </p>
                    <p>
                      <span>Professionalism:</span>
                      <span>
                        Skill, good judgement and individual adherence to the set standards.
                      </span>
                    </p>
                    <p>
                      <span>Innovation:</span>
                      <span>Take pro-active steps to drive performance.</span>
                    </p>
                    <p>
                      <span>Teamwork:</span>
                      <span>Collaborate with others to achieve company goals.</span>
                    </p>
                  </div>
                </div>
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
      <section id="services">
        <div className="service wow fadeInUp">
          <div className="section-header text-center">
            <p>Our Services</p>
            <h2>Services We Provide</h2>
          </div>
          <div className="row d-flex gap-4 justify-content-around flex-wrap">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <img src={service.image} alt={service.name} />
                <div className="service-card-content">
                  <h2 className="service-card-title text-capitalize">{service.name}</h2>
                  <a href="$" className="serivce-button">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="portfolio" className="wow fadeIn">
        <div className="sectionHeader textCenter">
          <p>Projects</p>
          <h2>Our Projects</h2>
        </div>
        <div className="containerFluid bgPortfolio py5">
          <div className="container py5">
            <div className="row m0 portfolioContainer">
              {portfolios.map(({ image, name, about }) => (
                <div className="colLg4 colMd6 colSm12 p0 portfolioItem">
                  <div className="positionRelative overflowHidden">
                    <div className="portfolioImg">
                      <img className="imgFluid w100" src={image} alt={name} />
                    </div>
                    <div className="portfolioText">
                      <h4 className="fontWeightBold mb4">{name}</h4>
                      <div className="dFlex flexColumn alignItemsCenter justifyContentCenter">
                        <p className="textCenter">{about}</p>
                        <a className="btn btnSm btnSecondary m1" href="$" data-lightbox="portfolio">
                          <i className="fa faEye" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="FAQs">
        <div className="faqs">
          <div className="container">
            <div className="section-header text-center">
              <p>Frequently Asked Question</p>
              <h2>You May Ask</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div id="accordion-1">
                  {FAQs.slice(0, 5).map((FAQ) => (
                    <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                      <div className="card-header">
                        <a
                          className="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapse{{ $FAQ->id }}"
                        >
                          {FAQ.question}
                        </a>
                      </div>
                      <div
                        id="collapse{{ $FAQ->id }}"
                        className="collapse"
                        data-parent="#accordion-1"
                      >
                        <div className="card-body">{FAQ.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div id="accordion-2">
                  {FAQs.slice(5, 10).map((FAQ) => (
                    <div className="card wow fadeInRight" data-wow-delay="0.{{ $FAQ->id }}s">
                      <div className="card-header">
                        <a
                          className="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapse{{ $FAQ->id }}"
                        >
                          {FAQ.question}
                        </a>
                      </div>
                      <div
                        id="collapse{{ $FAQ->id }}"
                        className="collapse"
                        data-parent="#accordion-2"
                      >
                        <div className="card-body">{FAQ.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="testimonial wow fadeIn" data-wow-delay="0.1s">
          <div className="section-header text-center">
            <p>Testimonials</p>
            <h2
              style={{
                color: "#fff",
              }}
            >
              From Our Customers
            </h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="testimonial-slider-nav">
                  {testimonials.map((testimonial) => (
                    <div className="slider-nav">
                      <img src={testimonial.image} alt="Testimonial" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="testimonial-slider">
                  {testimonials.map((testimonial) => (
                    <div className="slider-item">
                      <h3>{testimonial.customername}</h3>
                      <h4>{testimonial.occupation}</h4>
                      <p>{testimonial.comments}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact wow fadeInUp">
          <div className="container">
            <div className="section-header text-center">
              <p>Get In Touch</p>
              <h2>For Any Query</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="flaticon-address" />
                    <div className="contact-text">
                      <h2>Location</h2>
                      <p>Blue Heights, Level 3 Nkrumah Rd</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="flaticon-call" />
                    <div className="contact-text">
                      <h2>Phone</h2>
                      <p>+256 776024658</p>
                      <p>+256774764199</p>
                      <p>+256708881648</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="flaticon-send-mail" />
                    <div className="contact-text">
                      <h2>Email</h2>
                      <p className="d-flex flex-wrap">cubeengineeringlimited@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-form">
                  <div id="success" />
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="partners">
        <div className="container wow fadeIn">
          <div className="section-header text-center">
            <p>Partners</p>
            <h2>Our key partners</h2>
          </div>
          <div className="text-center">
            <div className="row align-items-center">
              <div className="col">
                <img width="280px" src={Picture1} alt="partner-logos" />
              </div>
              <div className="col">
                <img width="280px" src={Picture3} alt="partner-logos" />
              </div>
              <div className="col">
                <img width="280px" src={Picture4} alt="partner-logos" />
              </div>
              <div className="col">
                <img width="280px" src={Picture5} alt="partner-logos" />
              </div>
              <div className="col">
                <img width="280px" src={Picture2} alt="partner-logos" />
              </div>
              <div className="col">
                <img width="280px" src={Picture6} alt="partner-logos" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="timeline">
        <div className="container-fluid py-5 wow fadeIn">
          <div className="container py-5">
            <div className="row align-items-end mb-4 timeline-head">
              <div className="col-lg-6">
                <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
                  Daily Reminders
                </h6>
                <h1 className="section-title mb-3">Always Deliver more than expected.</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="owl-carousel timeline-carousel position-relative">
                  {timelines.map((timeline) => (
                    <div className="timeline d-flex flex-column text-center rounded overflow-hidden">
                      <div className="position-relative">
                        <div className="timeline-img">
                          <img className="img-fluid w-100" src={timeline.image} alt="" />
                        </div>
                        <div className="timeline-social d-flex flex-column align-items-center justify-content-center">
                          <a
                            target="_blank"
                            className="btn btn-secondary btn-social mb-2"
                            href="https://twitter.com/CubeEngineers?s=20&t=YOPh578w5sA3VX3KHRhieg"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                          <a
                            target="_blank"
                            className="btn btn-secondary btn-social mb-2"
                            href="https://www.linkedin.com/company/cube-engineering-and-general-supplies-limited/"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex flex-column timeline-text text-center py-4">
                        <h5 className="font-weight-bold">{timeline.title}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7594577220207!2d32.58001141521419!3d0.31122996411729714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbdd0eca93c03%3A0x38c6dc5b1d215262!2sBlue%20Heights!5e0!3m2!1sen!2sug!4v1663617359157!5m2!1sen!2sug"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt5"
        />
      </section>
      <section>
        <span className="floating-call-btn">
          <a href="tel:+256776024658">
            <i className="fa fa-phone my-float" />
          </a>
        </span>
      </section>
      <a href="$" className="back-to-top">
        <i className="fa fa-chevron-up" />
      </a>
    </Page>
  );
};

export default Home;
