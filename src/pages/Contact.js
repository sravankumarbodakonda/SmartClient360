import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
      <p className="text-gray-600 mt-2">
        We'd love to hear from you! Reach out to us using the form below.
      </p>
      <form className="mt-4 max-w-md mx-auto">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;