import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Contact' },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-5">
              <div className="contact-info">
                <div className="section-header" style={{ textAlign: 'left' }}>
                  <h3 style={{ textAlign: 'left' }}>Get in Touch</h3>
                  <p style={{ padding: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi
                    viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in.
                  </p>
                </div>
                <h4><i className="fa fa-map-marker"></i>123 E Shop, Los Angeles, CA, USA</h4>
                <h4><i className="fa fa-envelope"></i>email@example.com</h4>
                <h4><i className="fa fa-phone"></i>+123-456-7890</h4>
                <div className="social">
                  <a href="#!"><i className="fa fa-twitter"></i></a>
                  <a href="#!"><i className="fa fa-facebook"></i></a>
                  <a href="#!"><i className="fa fa-linkedin"></i></a>
                  <a href="#!"><i className="fa fa-instagram"></i></a>
                  <a href="#!"><i className="fa fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
