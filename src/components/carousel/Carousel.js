// import React from "react";
import Carousel1 from "../../assets/images/carousel1.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import Carousel3 from "../../assets/images/carousel3.jpg";

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Carousel3} className="d-block w-100" alt="" />
          <div className="carousel-caption">
            <p className="animated fadeInRight">We Are Professional</p>
            <h1 className="animated fadeInLeft">For Your Dream Project</h1>
            <a className="btn animated fadeInUp" href="#about">
              Find out More
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Carousel2} className="d-block w-100" alt="" />
          <div className="carousel-caption">
            <p className="animated fadeInRight">Professional innovators</p>
            <h1 className="animated fadeInLeft">We bring your innovation to life</h1>
            <a className="btn animated fadeInUp" href="#about">
              Find out More
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Carousel1} className="d-block w-100" alt="" />
          <div className="carousel-caption">
            <p className="animated fadeInRight">We Are Trusted</p>
            <h1 className="animated fadeInLeft">For Your Dream Home</h1>
            <a className="btn animated fadeInUp" href="#about">
              Find out More
            </a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
