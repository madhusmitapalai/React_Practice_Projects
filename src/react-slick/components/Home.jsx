import React from "react";
import './home.css'
import Slider from "react-slick";
import m1 from "../asset/m-1.jpg";
import m2 from "../asset/m-2.jpg";
const Home = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <h2 className="text-center ">Fade</h2>
        <div className="container">
          <div className="cards">
            <Slider {...settings}>
              <div>
                <img src={m1} alt="ggf" />
              </div>
              <div>
                <img src={m2} alt="kj" />
              </div>
              <div>
                <img src={m1} alt="kj" />
              </div>
              <div>
                <img src={m2} alt="kj" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
