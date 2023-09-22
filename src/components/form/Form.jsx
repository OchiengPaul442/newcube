// import React from "react";

const Form = () => {
  return (
    <form
      action="https://formsubmit.co/treostyle1@gmail.com"
      method="POST"
      encType="multipart/form-data"
    >
      <div className="control-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Your Name"
          value=""
          required
        />
        <p className="message-block text-danger name_error" />
      </div>
      <div className="control-group">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Your Email"
          value=""
          required
        />
        <p className="message-block text-danger email_error" />
      </div>
      <div className="control-group">
        <input
          type="text"
          className="form-control"
          name="subject"
          placeholder="Subject"
          value=""
          required
        />
        <p className="message-block text-danger subject_error" />
      </div>
      <div className="control-group">
        <textarea className="form-control" name="message" placeholder="Message" required />
        <p className="message-block text-danger message_error" />
      </div>
      <input type="hidden" name="_autoresponse" value="Hello hey" />
      <div>
        <button className="btn" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form;
