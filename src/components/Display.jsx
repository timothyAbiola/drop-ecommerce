import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiHouseSimple } from "react-icons/pi";
import { CiMenuKebab, CiHeart, CiStar, CiShoppingCart } from "react-icons/ci";
import Lebron from "../assets/New_Lebron_20_Basketball_Shoes.png";
import Lebron2 from "../assets/Lebron2.png";
import Lebron3 from "../assets/Lebron3.png";
import Lebron4 from "../assets/Lebron4.png";
import BootstrapCarousel from "./BootstrapCarousel";

const Display = ({ Nike, Nike_Roll, Lebron_roll1 }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="display-container border mt-2 rounded bg-secondary-subtle">
          <div className=" row  mt-2 pt-3  align-items-center">
            <Link to="/" className="col-3 text-center" style={{color: "black"}}>
              <FaArrowLeftLong size={20} />
            </Link>
            <span className="col-6 fw-bold text-center sneakers-text">
              Sneakers Detail
            </span>
            <CiMenuKebab className="col-3" size={20} />
          </div>
          <BootstrapCarousel
            Nike={Nike}
            Nike_Roll={Nike_Roll}
            Lebron_roll1={Lebron_roll1}
          />
          {/* <div className="row position-relative mx-2  shoe-type">
            <img src={Nike} alt="" className="items" height={350} />
            <img src={Ellipse} alt="" className="position-absolute ellipse" />
          </div> */}
        </div>
        <div className="row m-3 d-flex justify-content-between gap-2">
          <Link to="/nikeproduct" className="col mini-square">
            <img src={Lebron} alt="" className="lil-img" />
          </Link>
          <Link to="/newbalance" className="col mini-square ">
            <img src={Lebron2} alt="" className="lil-img" />
          </Link>
          <Link to="/addidas" className="col mini-square ">
            <img src={Lebron3} alt="" className="lil-img" />
          </Link>
          <Link to="/lebron" className="col mini-square ">
            <img src={Lebron4} alt="" className="lil-img" />
          </Link>
        </div>
        <div className="row m-auto mt-3">
          <h6 className="col">Lebron 20 Basketball Shoes</h6>
          <CiHeart className="col-2" size={30} />
        </div>
        <div className="row">
          <h2>$200</h2>
        </div>
        <div className="row">
          <span className="col">5 pair left</span>
          <span className="col">Sold 50</span>
          <div className="col-6 ">
            <CiStar size={25} />
            <span className="mx-2">4.7 (69 reviews)</span>
          </div>
        </div>
        <div className="row m-2 justify-content-between">
          <button className="col-5 border cart border-secondary p-2 align-items-center d-flex justify-content-center gap-2">
            <CiShoppingCart size={35} />
            <span>Add to Cart</span>
          </button>
          <button className="col-2 border house border-secondary p-2">
            <PiHouseSimple size={30} color="#086d24" />
          </button>
          <button className="col-3 border buy border-secondary p-2">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Display;
