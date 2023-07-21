import React from "react";
import img1 from "../assets/image4.jpg";
import img2 from "../assets/image6.jpg";
import img3 from "../assets/image8.jpg";

const Slider = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" style={{ height: "650px" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" style={{ height: "650px" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" style={{ height: "650px" }} alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
