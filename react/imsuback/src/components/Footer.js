import React from "react";
import logoDark from "../images/logo_dark.svg";
import facebook from "../images/c-facebook.svg";
import instagram from "../images/c-instagram.svg";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="footer_wrapper">
          <div className="logo">
            <a href="#">
              <img src={logoDark} alt="logo_dark" />
            </a>
          </div>
          <div className="sns">
            <ul className="icon">
              <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
              <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
            </ul>
          </div>
          <div className="footer_info">
            <p>서울특별시 마포구 동교로17길, 42</p>
            <p>(주)임수백컴퍼티 [대표이사 : 임수백]<br/>
               사업자등록번호 : 610-87-00754
            </p>
          </div>
          <div className="copyright">
            <p>Copyright © 2021. <br/>IMSUBAEK COMPANY All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
