import React from "react";

const Card = ({ shoe, saleText,price }) => {
  return (
    <>
      <div className="col">
        <img
          src={shoe}
          alt=""
          className="border rounded-board border-light shoe-card"
        />
        <div className="card-text px-4 text-start my-2">
            <span>{saleText}</span> <br />
          <span className="text-black fw-bolder">{price}</span>
        </div>
      </div>
    </>
  );
};

export default Card;