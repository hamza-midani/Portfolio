import React, { Fragment } from "react";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
import "./contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_09axzsv",
        "template_vr2qyej",
        e.target,
        "cXLy6mMY2n7btShrd"
      )
      .then(
        (result) => {
          toast.success("👍Your email is send👍");
        },
        (error) => {
          toast.error("Something Wrong");
        }
      );
    e.target.reset();
  }

  return (
    <Fragment>
      <section id="contact">
        <ScrollToTop smooth top="200" color="crimson" />;
        <div className="contact-heading">
          <h2>
            Contact <span>Us</span>
          </h2>
        </div>
        <div className="containner">
          <div className="row">
            <div className="column">
              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon">
                    <i>
                      <GiPositionMarker />
                    </i>
                  </div>
                  <div className="text">
                    <h5>Adresse</h5>
                    <p>Tunisia,Sousse</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i>
                      <BsFillTelephoneFill size="24px" />
                    </i>
                  </div>
                  <div className="text">
                    <h5>Contact Us</h5>
                    <p>(+216) 99-284-516</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i>
                      <BsFillEnvelopeFill />
                    </i>
                  </div>
                  <div className="text">
                    <h5>Mail</h5>
                    <p>Hamzamidani26@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="contact-form">
                <form onSubmit={sendEmail}>
                  <input name="Name" type="text" placeholder="Name" required />
                  <input
                    name="Email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    name="Comment"
                    placeholder="comment"
                    required
                  ></textarea>
                  <button type="sumbit" className="site-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="map-column">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39596.732517335164!2d10.59283633807964!3d35.82694377552669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302757385419a35%3A0xf5ddacf8299a19c0!2sRibat%20of%20Sousse!5e0!3m2!1sen!2stn!4v1672822597401!5m2!1sen!2stn"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
