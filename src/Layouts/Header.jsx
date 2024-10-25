import React from "react";
import "../Assets/Css/Header.css";
export default function Header() {
  return (
    <header id="header" className="fixed top-0 left-0 right-0">
      <div className="header-wrapper container flex text-[13pt] items-center justify-between ">
        <div className="logo relative w-[87px] ">
          <a href=" " className="">
            <img
              src="https://lauphan.com/WebLauPhan/theme/logo_phan.svg"
              alt=""
              className="w-full object-cover px-[12px] my-[4px]"
            />
          </a>
        </div>
        <div className="nav">
          <ul className="flex items-center">
            <li className=" text-white pr-[70px] p-[5px] cursor-pointer text-[19.5px] hover:font-bold hover:border-[4px_solid_#e84a1b]  active-link">
              Trang chủ
            </li>
            <li className=" text-white pr-[70px] p-[5px] cursor-pointer text-[19.5px] hover:font-bold  hover:border-[4px_solid_#e84a1b] ">
              Đặt bàn
            </li>
            <li className=" text-white pr-[70px] p-[5px] cursor-pointer text-[19.5px] hover:font-bold  hover:border-[4px_solid_#e84a1b] ">
              Tin tức
            </li>
            <li className=" text-white pr-[70px] p-[5px] cursor-pointer text-[19.5px] hover:font-bold  hover:border-[4px_solid_#e84a1b] ">
              Địa chỉ
            </li>
          </ul>
        </div>
        <div className="act flex">
          <button className="flex items-center justify-center btn-dangnhap">
            Đăng nhập
            <span className="ml-[10px] mt-[1px]">
              <img
                src="https://phanexpress.com/WebLauPhan/theme/user.svg"
                alt=""
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
