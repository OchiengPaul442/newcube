import { Carousel as CarouselSlide } from 'react-responsive-carousel';
import Carousel1 from '../../assets/images/carousel1.jpg';
import Carousel2 from '../../assets/images/carousel2.jpg';
import Carousel3 from '../../assets/images/carousel3.jpg';

const Carousel = () => {
  const carouselItems = [
    {
      id: 1,
      imgSrc: Carousel3,
      captionTitle: 'We Are Professional',
      captionSubtitle: 'For Your Dream Project',
    },
    {
      id: 2,
      imgSrc: Carousel2,
      captionTitle: 'Professional innovators',
      captionSubtitle: 'We bring your innovation to life',
    },
    {
      id: 3,
      imgSrc: Carousel1,
      captionTitle: 'We Are Trusted',
      captionSubtitle: 'For Your Dream Home',
    },
  ];

  return (
    <CarouselSlide
      autoPlay
      interval={8000}
      infiniteLoop
      showThumbs={false}
      dynamicHeight
      transitionTime={500}
      showStatus={false}
    >
      {carouselItems.map((item) => {
        return (
          <div key={item.id} className="carousel-item active">
            <img src={item.imgSrc} className="d-block w-100" alt={item.captionTitle} />
            <div className="carousel-caption">
              <p className="animated fadeInRight">{item.captionTitle}</p>
              <h1 className="animated fadeInLeft">{item.captionSubtitle}</h1>
              <a className="btn animated fadeInUp" href="#about">
                Find out More
              </a>
            </div>
          </div>
        );
      })}
    </CarouselSlide>
  );
};

export default Carousel;
