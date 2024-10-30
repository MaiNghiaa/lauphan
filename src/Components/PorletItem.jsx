import React from "react";

export default function PorletItem({ item, index }) {
  return (
    <div
      className="flex items-start justify-around pb-[10px] select-none"
      key={index}
    >
      <div className="flex flex-col justify-start">
        <div className="box-price border-l-[9px] border-l-[#df5800] h-[103pt] pl-[10pt]">
          <div className="price text-[35pt] uppercase leading-[50px] font-[SansitaOne]">
            Set <span className="text-[#ff6a00] text-[50pt]">{item.price}</span>
          </div>
          <div className="slogan text-[14pt] mb-[1rem]">{item.slogan}</div>
          <div className="quantity text-[#ff6a00] text-[14pt] pt-[15px]">
            {item.quantity}
          </div>
        </div>
        <ul className="ml-[35pt] pt-[18px] flex flex-col gap-1 overflow-hidden max-h-[285px] ">
          {item.Detail.map((detailItem, detailIndex) => (
            <li className="list-disc text-[10pt] font-thin " key={detailIndex}>
              - {detailItem}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-[0_0_50%] max-w-[50%]">
        <img
          src={require("../Assets/Images/z5967992120550_ecc82248334794105f8635c9a35a5c7e.jpg")}
          className="w-full"
          alt=""
        />
      </div>
    </div>
  );
}
