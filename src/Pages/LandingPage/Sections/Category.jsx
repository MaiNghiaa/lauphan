import React from "react";
import TrademarkBox from "../../../Components/TrademarkBox";

export default function Category() {
  return (
    <div className="portlet">
      <div className="portlet-wrapper container">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full">
            <div className="title-category text-[20px] text-[#162938] font-bold uppercase py-[25px] text-center ">
              Thương hiệu
            </div>
          </div>
        </div>
        <div className="main-porlet flex flex-wrap mx-[-15px] ">
          <TrademarkBox />
          <TrademarkBox />
          <TrademarkBox />
        </div>
      </div>
    </div>
  );
}
