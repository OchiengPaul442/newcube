// import React from 'react'
import Picture1 from '../../assets/images/industry.jpg';
import Picture2 from '../../assets/images/oil.jpg';
import Picture3 from '../../assets/images/supplies.jpg';
import Picture4 from '../../assets/images/electrical.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'GENERAL SUPPLIES',
      image: Picture3,
    },
    {
      id: 2,
      name: 'ENGINEERING SERVICES',
      image: Picture4,
    },
    {
      id: 3,
      name: 'OIL & GAS',
      image: Picture2,
    },
    {
      id: 4,
      name: 'INDUSTRIAL INSTALLATIONS',
      image: Picture1,
    },
  ];
  return (
    <section id="services">
      <div className="service wow fadeInUp">
        <div className="section-header text-center">
          <p>Our Services</p>
          <h2>Services We Provide</h2>
        </div>
        <div className="row d-flex gap-4 justify-content-around flex-wrap">
          {services.map((service) => {
            return (
              <div className="service-card" key={service.id}>
                <img src={service.image} alt={service.name} />
                <div className="service-card-content">
                  <h2 className="service-card-title text-capitalize">{service.name}</h2>
                  {/* <span className="serivce-button">Learn More</span> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
