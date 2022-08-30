import React from 'react';
import img1 from "../images/about.png";
import img2 from "../images/work.png";
import img3 from "../images/contact.png";

const Article = () => {
  return (
    <div className='container'>
      <div className="main">
      <figure>
          <img src={img1} alt="img1" />
          <figcaption>ABOUT</figcaption>
        </figure>
        <figure>
          <img src={img2} alt="img2" />
          <figcaption>WORK</figcaption>
        </figure>
        <figure>
          <img src={img3} alt="img3" />
          <figcaption>CONTACT US</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Article;