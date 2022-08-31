import React from "react";

const Footer = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="container">
      <div id="map"style={{width:'414px', height:'400px', backgroundColor : '#ddd'}}></div>
      <footer>
        <div className="footer_wrapper">
          <div className="logo">
            <a href="#">
              <img src={path + '/images/logo_dark.svg'} alt="logo_dark" />
            </a>
          </div>
          <div className="sns">
            <ul className="icon">
              <li><a href="#"><img src={path + '/images/c-facebook.svg'} alt="facebook" /></a></li>
              <li><a href="#"><img src={path + '/images/c-instagram.svg'}  alt="instagram" /></a></li>
            </ul>
          </div>
          <div className="footer_info">
            <p>서울특별시 마포구 동교로17길, 42</p>
            <p>(주)임수백컴퍼티 [대표이사 : 임수백]<br/>
               사업자등록번호 : 610-87-00754
            </p>
          </div>
          <div className="link_portfolio">
            <a href="https://nmgvnm.github.io/Portfolio">포트폴리오 바로가기</a>
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
