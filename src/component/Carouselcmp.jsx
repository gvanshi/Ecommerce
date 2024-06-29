import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';

const Carouselcmp= () => {
  return (
    <div className="container mt-5">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/src/assets/image.png" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/src/assets/image2.png" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="/src/assets/image3.png" className="d-block w-100" alt="Slide 3" />
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
    </div>
  );
};

export default Carouselcmp;
