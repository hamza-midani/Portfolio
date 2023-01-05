import React from "react";
import "./Navbar.css";
import { useRef } from "react";
import { useEffect, useState } from "react";

const NavBar = () => {
  //  nav bar
  const hamburger = useRef(".header .nav-bar .nav-list .hamburger");
  const mobileMenu = useRef(".header .nav-bar .nav-list ul");

  const handleClick = () => {
    hamburger.current.classList.toggle("active");
    mobileMenu.current.classList.toggle("active");
  };
  //nav bar

  // hide  navbar
  //two state for scrool direction and nav bar visibility
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); //current position
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset; // scroll position
      const isVisible = prevScrollPos > currentScrollPos;
      setIsVisible(isVisible);
      setPrevScrollPos(currentScrollPos); //update prevscroll =current scroll position
    }
    window.addEventListener("scroll", handleScroll); // add event listener to scroll event

    return () => {
      window.removeEventListener("scroll", handleScroll); //
    };
  }, [prevScrollPos]); //when prev state change (usee efeect yarja3 yekhdem)

  //end hide

  return (
    <section id="header">
      <div
        className="header container"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1>
                <span>H</span>amza <span>M</span>idani <span>|</span>
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger" ref={hamburger} onClick={handleClick}>
              <div className="bar"></div>
            </div>
            <ul ref={mobileMenu}>
              <li>
                <a href="#hero" data-after="Home">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" data-after="About">
                  about me
                </a>
              </li>
              <li>
                <a href="#skills" data-after="Skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" data-after="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
