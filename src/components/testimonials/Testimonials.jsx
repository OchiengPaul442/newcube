// import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      customername: 'John Doe',
      occupation: 'Engineer',
      comments:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
      image: 'testimonial-1.jpg',
    },
    {
      id: 2,
      customername: 'John Doe',
      occupation: 'Engineer',
      comments:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
      image: 'testimonial-1.jpg',
    },
    {
      id: 3,
      customername: 'John Doe',
      occupation: 'Engineer',
      comments:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
      image: 'testimonial-1.jpg',
    },
    {
      id: 4,
      customername: 'John Doe',
      occupation: 'Engineer',
      comments:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
      image: 'testimonial-1.jpg',
    },
    {
      id: 5,
      customername: 'John Doe',
      occupation: 'Engineer',
      comments:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
      image: 'testimonial-1.jpg',
    },
  ];
  return (
    <section id="testimonials">
      <div className="testimonial wow fadeIn" data-wow-delay="0.1s">
        <div className="section-header text-center">
          <p>Testimonials</p>
          <h2
            style={{
              color: '#fff',
            }}
          >
            From Our Customers
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonial-slider-nav">
                {testimonials.map((testimonial) => {
                  return (
                    <div className="slider-nav">
                      <img src={testimonial.image} alt="Testimonial" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="testimonial-slider">
                {testimonials.map((testimonial) => {
                  return (
                    <div className="slider-item">
                      <h3>{testimonial.customername}</h3>
                      <h4>{testimonial.occupation}</h4>
                      <p>{testimonial.comments}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
