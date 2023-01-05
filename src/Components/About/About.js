import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Hmza from "../../images/hamza.png";
import resume from "../../images/Hamza.pdf";

import "../../App.css";
import "./About.css";

const socials = [
  {
    link: "https://github.com/hamza-midani",
    icon: <BsGithub size="5rem" color="crimson" />,
  },
  {
    link: "https://www.linkedin.com/feed/",
    icon: <FaLinkedin size="5rem" color="crimson" />,
  },
];

const donnees = {
  fullName: "Hamza Midani",
  Age: "25 years old",
  Email: "hamzamidani26@gmail.com",
  Experience: "+1 years",
  Phone: "(+216) 99 284 516",
};

function About() {
  return (
    <section id="about">
      <h1 className="section-title">
        About <span>me</span>
      </h1>
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={Hmza} alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h2>Front End Developer</h2>
          <div className="pa">
            Professionally connected with the web development industry and
            information technology for many years.Well-organised person, problem
            solver, independent employee with high attention to details.
          </div>
          <div className="donnees-personnel">
            <div>
              <h1>Full Name:</h1>
              <p>{donnees.fullName}</p>
            </div>
            <div>
              <h1>Age:</h1>
              <p>{donnees.Age}</p>
            </div>
            <div>
              <h1>Email:</h1>
              <p>{donnees.Email}</p>
            </div>
            <div>
              <h1>Experience:</h1>
              <p>{donnees.Experience}</p>
            </div>
            <div>
              <h1>Phone:</h1>
              <p>{donnees.Phone}</p>
            </div>
          </div>
          <a href={resume} className="cta">
            Download Resume
          </a>
          <div className="social-media">
            {socials.map((social) => {
              return <a href={social.link}>{social.icon}</a>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
