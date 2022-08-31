import React from 'react';

const Article = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className='container'>
      <div className="main">
      <figure>
          <img src={path + '/images/about.png'} alt="img1" />
          <figcaption>ABOUT</figcaption>
        </figure>
        <figure>
          <img src={path + '/images/work.png'} alt="img2" />
          <figcaption>WORK</figcaption>
        </figure>
        <figure>
          <img src={path + '/images/contact.png'} alt="img3" />
          <figcaption>CONTACT US</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Article;