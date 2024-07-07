import React from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { PiGreaterThan } from "react-icons/pi";
import adidas from "../assets/addidas.png";
import nike from "../assets/nike.png";
import vans from "../assets/vans.png";
import newbalance from "../assets/newbalance.png";

const Main = () => {
  return (
    <>
      <div className="container mt-3">
        <span className="d-flex align-items-center gap-2 bg-secondary-subtle p-1 rounded-pill">
          <CiSearch />
          <input
            type="text"
            placeholder="Search for your drops..."
            className="bg-secondary-subtle"
          />
        </span>
        <div className="d-flex justify-content-between mt-3 align-items-center">
          <span className="d-flex  align-items-center">
            <CiLocationOn color="green" />
            <span className="small-font">
              <span className="text-secondary">Ship to </span>Abesan Estate,
              Block 3, no 27
            </span>
          </span>
          <PiGreaterThan size={12} />
        </div>
      </div>
      <div className="d-flex justify-content-between">
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
      <div className="border border-light rounded-board bg-black  mx-3 my-4 d-flex justify-content-end p-2">
        {/* awaiting designer image on the board */}
        <div></div>
        <div className="">
          <h3 className="text-light fs-6">Year-End Sale</h3>
          <h5 className="text-secondary fs-6">Up to 90%</h5>
          <button className="btn btn-light-green sale-text">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default Main;
