import React from "react";
import "./Header.css";
import { Typewriter } from "react-simple-typewriter";
const Header = () => {
  return (
    <section id="hero">
      <div className="hero ">
        <div className="hamza">
          <h1>
            Hello, <span></span>
          </h1>
          <h1>
            My Name is <span></span>
          </h1>
          <h1>
            Hamza <span></span>
          </h1>

          <div className="cta">
            <h2>
              {" "}
              <span>
                <Typewriter
                  words={[" I'm front_end Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
