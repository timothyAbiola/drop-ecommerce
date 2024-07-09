import React from "react";
import { Carousel } from "react-bootstrap";
import Ellipse from "../assets/Ellipse16.png";
// import Nike from "../assets/Frame5.png";
// import Nike_Roll from "../assets/Nike_roll.png";
// import Lebron_roll1 from "../assets/Lebron_roll1.png";

const BootstrapCarousel = ({Nike, Nike_Roll, Lebron_roll1}) => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="row position-relative mx-2  shoe-type">
          <img src={Nike} alt="" className="items w-100" height={300} />
          <img src={Ellipse} alt="" className="position-absolute ellipse" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={Nike}
          alt="Second slide"
        /> */}
        <div className="row position-relative mx-2  shoe-type">
          <img src={Nike_Roll} alt="" className="items w-100" height={300} />
          <img src={Ellipse} alt="" className="position-absolute ellipse" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row position-relative mx-2  shoe-type">
          <img src={Lebron_roll1} alt="" className="items w-100" height={300} />
          <img src={Ellipse} alt="" className="position-absolute ellipse" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
