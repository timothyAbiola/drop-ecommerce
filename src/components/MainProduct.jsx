import React from "react";
import Card from "./Card";
import Lebron20 from "../assets/Lebron20_Basketball_Shoes.png";
import NewBalance from "../assets/NewBalance_Shoe.png";
import Vans from "../assets/Vans_Shoe.png";

const MainProduct = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row fw-bold px-3">New Arrival</div>
        <div className="row gap-1 ">
          <Card
            shoe={Lebron20}
            saleText="LeBron 20 Basketball Shoes"
            price="$200"
          />
          <Card
            shoe={Vans}
            saleText="RUNFALCON 3 CLOUDFOAM LOW RUNNING SHOES"
            price="$65"
          />
        </div>
        <div className="row gap-1 ">
          <Card
            shoe={NewBalance}
            saleText="New Balance 327 Moonbeam Leopard"
            price="$100"
          />
          <Card
            shoe={Vans}
            saleText="JJJJound x Vans Classic Slip-On White"
            price="$85"
          />
        </div>
      </div>
    </>
  );
};

export default MainProduct;
