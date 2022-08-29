import React from "react";
import "../assets/css/minireset.css";
import logo from "../images/logo_white.svg";
import video from "../images/header_video.mp4"
import "../style/Imsuback.css"


const ImsubackHeader = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="nav_wrapper">
            <div className="menu">
              <span>-</span>
              <span>-</span>
            </div>
            
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

export default ImsubackHeader;
