import React from "react";
import Data from "../../Mookup/DataSet.json";
import PorletItem from "../../Components/PorletItem";
export default function Porlet() {
  return (
    <div className="Porlet pt-[71px]">
      <div className="Porlet-wrapper container">
        <p className="text-center text-[25pt] font-bold py-24">Thực đơn</p>
        <div className="main-porlet ">
          {Data.map((item, index) => (
            <PorletItem index={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
