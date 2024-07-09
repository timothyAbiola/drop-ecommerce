import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import DropLogo from "../assets/drops-logo.png";
import Vector from "../assets/Vector.png"
import Ellipse from "../assets/Ellipse18.png"
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row align-items-center">
          <Link to="/" className="col-3 text-dark">
            <FaArrowLeftLong size={30} />
          </Link>
          <img src={DropLogo} alt="" className="col-5 " />
        </div>
        <div className="row position-relative round-holder">
          <img src={Ellipse} alt="" className="ellipse" />
          <img src={Vector} alt="" className="vector" />
        </div>
        {/* <div className="row text-center "> */}
        <h1 className="fw-bold fs-1 mt-3 text-center">Successfully added to cart</h1>
        {/* </div> */}
      </div>
    </>
  );
};

export default Cart;
