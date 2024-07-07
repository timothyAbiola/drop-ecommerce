import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

const Display = () => {
  return (
    <>
      <div className="container-fluid">
        <div className=" d-flex justify-content-between border rounded mt-2 pt-3 bg-secondary">
            <FaArrowLeftLong className="col bg-danger" size={20}/>
            <span className="col fw-bold sneakers-text">Sneakers Detail</span>
            <CiMenuKebab className="col" size={20}/>
        </div>
      </div>
    </>
  );
};

export default Display;
