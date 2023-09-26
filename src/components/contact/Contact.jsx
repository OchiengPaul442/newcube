// import React from 'react'
import Form from '../form/Form';

const Contact = () => {
  return (
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
  );
};

export default Contact;
