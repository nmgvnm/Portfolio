import React, { useState, useEffect } from "react";
import logo from "../images/logo_white.svg";
import video from "../images/header_video.mp4";
import "../style/font.css"
import "../style/Imsuback.scss";
import "../style/mobile.css";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <div className="container">
      <header>
        <nav>
          <div className={scrollPosition < 400 ? "nav_wrapper_origin" : "nav_wrapper_change"}>
            <div className="menu">
              <span>-</span>
              <span>-</span>
            </div>
            {/* <div class="slide_menu_wrapper">
              <ul class="slide_menu">
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">WORKS</a></li>
                <li><a href="#">SERVIES</a></li>
                <li><a href="#">CONTACT US</a></li>
              </ul>
            </div> */}
            <div className="logo">
              <a href="#"><img src={logo} /></a>
            </div>
          </div>
        </nav>
        <div className="video">
          <h2>We value the brand the most</h2>
          <video src={video} autoPlay muted loop></video>
        </div>
      </header>
    </div>
  );
};

export default Header;
