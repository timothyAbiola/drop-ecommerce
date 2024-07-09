import React from "react";
import { CiSearch, CiLocationOn, CiHeart } from "react-icons/ci";
import { PiGreaterThan } from "react-icons/pi";
import { TbFilter } from "react-icons/tb";
import { TbListCheck } from "react-icons/tb";
import adidas from "../assets/addidas.png";
import nike from "../assets/nike.png";
import vans from "../assets/vans.png";
import newbalance from "../assets/newbalance.png";
import showoff from "../assets/showoff.png";
import Nikey from "../assets/Nikey.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="container mt-3 contigent">
        <span className="d-flex align-items-center gap-2 bg-secondary-subtle p-1 rounded-pill search-holder">
          <CiSearch />
          <input
            type="text"
            placeholder="Search for your drops..."
            className="bg-secondary-subtle drops-search"
          />
        </span>
        <div className="d-flex justify-content-between mt-3 align-items-center">
          <span className="d-flex  align-items-center address">
            <CiLocationOn color="green" />
            <span className="small-font">
              <span className="text-secondary">Ship to </span>Abesan Estate,
              Block 3, no 27
            </span>
          </span>
          <div className="gap-3 d-flex">
            <div>
              <PiGreaterThan size={13} fontWeight={700} />
              <TbFilter className="filter" size={25} />
            </div>
            <TbListCheck size={30} className="filter" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between brands-min">
        <img
          src={adidas}
          className="rounded-circle border border-light brand"
        />
        <img src={vans} className="rounded-circle border border-light brand" />
        <img
          src={newbalance}
          className="rounded-circle border border-light brand"
        />
        <img src={nike} className="rounded-circle border border-light brand" />
      </div>
      <h1 className="text-center fw-bold hide">New Arrivals</h1>
      <div className="arrive">
        <div className="year-sale border border-light rounded-board bg-black  my-4 d-flex justify-content-between">
          <Link>
            <img src={showoff} alt="" style={{ width: "100%" }} />
          </Link>
          <div style={{ width: "50%", paddingTop: "20px" }}>
            <h3 className="text-light fs-6">Year-End Sale</h3>
            <h5 className="text-secondary fs-6">Up to 90%</h5>
            <button className="btn btn-light-green sale-text">Shop Now</button>
          </div>
        </div>
        <div className="animate hide">
          <img src={Nikey} alt="" width={500} className="nikey" />
          <CiHeart size={60} className="heart"/>
        </div>
      </div>
    </>
  );
};

export default Main;
