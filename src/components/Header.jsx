import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import DropLogo from "../assets/drops-logo.png"
import { IoMdNotifications } from "react-icons/io";
import { LiaUserLockSolid } from "react-icons/lia";

const Header = () => {
  return (
    <>
      <header className="d-flex justify-content-between mt-4 mobile">
        <button className="border border-light rounded-circle  p-2 pt-0">
          <CiMenuBurger size={20} className="bod" />
        </button>
        <img src={DropLogo} alt="Drop Logo" className="img-logo" />
        <button className="border border-light rounded-circle p-1 pt-0">
          <IoMdNotifications size={20} />
        </button>
      </header>
      <header className="web-version container-fluid mt-3">
        <a href="#" className="fw-bold text-dark">Men's Shoes</a>
        <a href="#" className="fw-bold text-dark">Women's Shoes</a>
        <a href="#" className="fw-bold text-dark">New Arrivals</a>
        <a href="#" className="fw-bold text-dark">Collections</a>
        <a href="#" className="fw-bold text-dark">Sale</a>
        <LiaUserLockSolid className="userAcc" size={25}/>
      </header>
    </>
  );
};

export default Header;
