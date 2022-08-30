import React from "react";
import info1 from "../images/info-1.png";
import info2 from "../images/info-2.png";


const Info = () => {
  return (
    <div className="container">
      <div className="info">
        <div className="info_wrapper">
          <div className="hours info_box">
            <img src={info1} alt="info_img1" />
            <h3>영업시간</h3>
            <p>
              Monday – Friday
              <br />
              10:00am – 6:30pm
            </p>
          </div>
          <div className="inquiry info_box">
            <img src={info2} alt="info_img2" />
            <h3>광고문의</h3>
            <p>
              임수백컴퍼니는 지속적으로 광고주분들께 최고의 결과를 <br />
              서비스합니다.
              <br />
              tel. (02) 6732-0924
              <br />
              Mail. ceo@isbco.kr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
