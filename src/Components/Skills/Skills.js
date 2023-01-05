import React, { useEffect, useState } from "react";

import "react-icons/fa";
import "./Skill.css";

const skills = [
  {
    label: "HTML",
    percente: 90,
  },
  {
    label: "CSS",
    percente: 50,
  },
  {
    label: "SASS",
    percente: 80,
  },
  {
    label: "Java Script",
    percente: 70,
  },
  {
    label: "React js",
    percente: 75,
  },
  {
    label: "Java",
    percente: 70,
  },
  {
    label: "C#",
    percente: 65,
  },
  {
    label: "Bootstrap",
    percente: 65,
  },
];

function Skills() {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1558 && window.scrollY < 2663) {
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="skills">
      <div className="skills_section">
        <div className="skills_head">
          <h2>
            My <span>Skills</span>
          </h2>
          <p>Here is my skills to represent my Expertise</p>
        </div>
        <div className="skills_main">
          {skills.map((skill) => {
            return (
              <div className="skill_bar">
                <div className="info">
                  <p>{skill.label}</p>
                  <p>{skill.percente}%</p>
                </div>
                <div className="bar">
                  <span
                    className="bar-animation"
                    style={{
                      width: (showAnimation ? skill.percente : 0) + "%",
                    }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
