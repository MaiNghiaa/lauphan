import React from "react";

export default function BoxList({ item, index }) {
  return (
    <div
      key={index}
      className="relative w-full px-[15px] Box-items flex-[0_0_33.333333333%] max-w-[33.333333%]"
    >
      <div className="box">
        <div className="box-price border-l-[9px] border-l-[#df5800] h-[103pt] pl-[10pt]">
          <div className="price text-[35pt] uppercase leading-[50px] font-[SansitaOne]">
            Set <span className="text-[#ff6a00] text-[50pt]">{item.price}</span>
          </div>
          <div className="slogan text-[14pt] mb-[1rem]">{item.slogan}</div>
          <div className="quantity text-[#ff6a00] text-[14pt] pt-[15px]">
            {item.quantity}
          </div>
        </div>
        <div className="box-img pt-[35pt] relative">
          <img src={require(`../Assets/Images/${item.image}`)} alt="Product" />
        </div>
      </div>
    </div>
  );
}
