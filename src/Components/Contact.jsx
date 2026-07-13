import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fsm2tbs",
        "template_surtieb",
        formData,
        "esiGVnv3RKMGl7zIa"
      )
      .then(() => {
        alert("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">

        <h2 className="text-center section-title mb-5">
          Contact Me
        </h2>

        <div className="row g-4 align-items-stretch">

          {/* Left Side */}
          <div className="col-lg-5">

            <div className="contact-info h-100">

              <p className="contact-tag">CONTACT ME</p>

              <h2>Get In Touch</h2>

              <p className="contact-text">
                Feel free to contact me for internships, projects,
                collaborations, or any opportunities related to Web
                Development and Java.
              </p>

              <div className="row mt-4">

                <div className="col-12 mb-4">
                  <div className="info-box">
                    <i className="bi bi-telephone-fill"></i>
                    
                    <div>
                      <a href="tel:+919342577163">
                      <h6>Phone</h6>
                      <p>+91 9342577163</p>
                    </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-4">
                  <div className="info-box">
                    <i className="bi bi-envelope-fill"></i>

                    <div>
                      <a href="mailto:vijisaswini@gmail.com">
                        <h6>Email</h6>
                      <p>vijisaswini@gmail.com</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-4">
                  <div className="info-box">
                    <i className="bi bi-github"></i>

                    <div>
                      <h6>GitHub</h6>

                      <a
                        href="https://github.com/Aswini2104"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/aswini2104
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="info-box">
                    <i className="bi bi-linkedin"></i>

                    <div>
                      <h6>LinkedIn</h6>

                      <a
                        href="https://linkedin.com/in/aswinivs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        linkedin.com/in/aswinivs
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-7">

            <div className="contact-form">

              <h2 className="mb-3">
                Have a Question?
              </h2>

              <p className="mb-4">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={sendEmail}>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  rows="6"
                  className="form-control mb-4"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button className="btn contact-btn">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;