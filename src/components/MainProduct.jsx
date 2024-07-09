import React from "react";
import Card from "./Card";
import Lebron20 from "../assets/Lebron20_Basketball_Shoes.png";
import NewBalance from "../assets/NewBalance_Shoe.png";
import Vans from "../assets/Vans_Shoe.png";
import Falcons from "../assets/Runfalcon5.png";
import { Link } from "react-router-dom";

const MainProduct = () => {
  return (
    <>
      <div className="container-fluid shoe-end">
        <div className="row fw-bold px-3 unshow">New Arrival</div>
        <div className="row gap-1 shoe-display">
          <Link
            to="/nikeproduct"
            style={{ width: "fit-content" }}
            className="col"
          >
            <Card
              shoe={Lebron20}
              saleText="LeBron 20 Basketball Shoes"
              price="$200"
            />
          </Link>
          <Link
            to="/nikeproduct"
            style={{ width: "fit-content" }}
            className="col"
          >
            <Card
              shoe={Falcons}
              saleText="RUNFALCON 3 CLOUDFOAM LOW RUNNING SHOES"
              price="$65"
            />
          </Link>
          <Link
            to="/newbalance"
            style={{ width: "fit-content" }}
            className="col"
          >
            <Card
              shoe={NewBalance}
              saleText="New Balance 327 Moonbeam Leopard"
              price="$100"
            />
          </Link>

          <Link
            to="/nikeproduct"
            style={{ width: "fit-content" }}
            className="col"
          >
            <Card
              shoe={Vans}
              saleText="JJJJound x Vans Classic Slip-On White"
              price="$85"
            />
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default MainProduct;
