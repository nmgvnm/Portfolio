import React, { useState, useEffect } from "react";
import "../style/font.css"
import "../style/Imsuback.scss";
import "../style/mobile.css";

const Header = () => {
  const path = process.env.PUBLIC_URL;

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  
  const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

  return (
    <div className="container">
      <header>
        <nav>
          <div className={scrollPosition < 400 ? "nav_wrapper_origin" : "nav_wrapper_change"}>
            <div className={isOpen ? "menu_active" : "menu"} onClick={()=>toggleMenu()}>
              <span>-</span>
              <span>-</span>
            </div>
            <div class={isOpen ? "slide_menu_wrapper_none" : "slide_menu_wrapper"}>
              <ul class={isOpen ? "slide_menu_active" : "slide_menu"}>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">WORKS</a></li>
                <li><a href="#">SERVIES</a></li>
                <li><a href="#">CONTACT US</a></li>
              </ul>
            </div>
            <div className="logo">
              <a href="#"><img src={path + '/images/logo_white.svg'} /></a>
            </div>
          </div>
        </nav>
        <div className="video">
          <h2>We value the brand the most</h2>
          <video src={path + '/images/header_video.mp4'} autoPlay muted loop></video>
        </div>
      </header>
    </div>
  );
};

export default Header;
