// Header.js
import React, { useContext } from "react";
import "../Assets/Css/Header.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import navList from "../Mookup/dataNavItem.json";
export default function Header() {
  const { navClick, updateNavClick } = useContext(GlobalContext);
  console.log(navClick);
  const handleNavClick = (path) => {
    updateNavClick(path);
  };

  return (
    <header
      id={
        navClick !== "/dat-ban" && navClick !== "/dia-chi"
          ? "header"
          : "headerExpress"
      }
      className="fixed top-0 left-0 right-0 z-[88888] "
    >
      <div className="header-wrapper container flex text-[13pt] items-center justify-between ">
        <div className="logo relative w-[87px] select-none">
          {navClick !== "/dat-ban" && navClick !== "/dia-chi" ? (
            <Link to="/">
              <img
                src="https://lauphan.com/WebLauPhan/theme/logo_phan.svg"
                alt=""
                className=" px-[12px] my-[4px] w-full object-cover"
              />
            </Link>
          ) : (
            <Link to="/">
              <img
                src="https://phanexpress.com/WebLauPhan/theme/Phan_logoEx.svg"
                alt=""
                className="py-1 px-[12px] my-[4px] w-full object-cover"
              />
            </Link>
          )}
        </div>
        <div className="nav">
          <ul className="flex items-center select-none">
            {navList.map((navItem, index) => (
              <Link to={navItem.href}>
                <li
                  onClick={() => handleNavClick(navItem.href)}
                  className="text-white pr-[70px] p-[5px] cursor-pointer text-[19.5px] hover:font-bold hover:border-[4px_solid_#e84a1b]"
                >
                  {navItem.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div
          className={
            navClick !== "/dat-ban" && navClick !== "/dia-chi"
              ? "act flex invisible"
              : "act flex visible"
          }
        >
          <Link to="/Dang-nhap">
            <button className="flex items-center justify-center btn-dangnhap select-none">
              Đăng nhập
              <span className="ml-[10px] mt-[1px]">
                <img
                  src="https://phanexpress.com/WebLauPhan/theme/user.svg"
                  alt=""
                />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
