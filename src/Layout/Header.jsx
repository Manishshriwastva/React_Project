import React from 'react';
import image1 from "../Images/s-1.jpg"
import image2 from "../Images/s-2.jpg"
import image3 from "../Images/s-3.jpg"


function Header(props) {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ height: '500px' }} src={image1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img style={{ height: '500px' }} src={image2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img style={{ height: '500px' }} src={image3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Header;
