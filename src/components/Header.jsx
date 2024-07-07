import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import DropLogo from "../assets/drops-logo.png"
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header className="d-flex justify-content-between mt-4">
        <button className="border border-light rounded-circle  p-2 pt-0">
          <CiMenuBurger size={20} className="bod" />
        </button>
        <img src={DropLogo} alt="Drop Logo" className="img-logo"/>
        <button className="border border-light rounded-circle p-1 pt-0">
            <IoMdNotifications size={20}/>
        </button>
      </header>
    </>
  );
};

export default Header;
