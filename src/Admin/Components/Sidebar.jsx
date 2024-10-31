// components/Sidebar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DASHBOARD,
  INFORMATION,
  ACCOUNTS_MANAGEMENT,
  ORDER_MANAGEMENT,
  NEWS_MANAGEMENT,
  LOGINADMIN,
} from "../../Router/Path";
export default function Sidebar() {
  const navigate = useNavigate();
  const clickLogout = () => {
    alert("Đăng xuất");
    localStorage.clear();
    navigate(LOGINADMIN);
  };
  return (
    <div className="bg-gray-800 text-white w-64 h-screen fixed p-5">
      <Link to={DASHBOARD} className="block py-2 px-4 rounded ">
        <h2 className="text-2xl font-semibold mb-10 text-center">Dashboard</h2>
      </Link>
      <ul className="space-y-4">
        <li>
          <Link
            to={INFORMATION}
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Thông tin đăng nhập
          </Link>
        </li>
        <li>
          <Link
            to={ACCOUNTS_MANAGEMENT}
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Quản lí tài khoản
          </Link>
        </li>
        <li>
          <Link
            to={ORDER_MANAGEMENT}
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Quản lí các đơn đặt hàng
          </Link>
        </li>
        <li>
          <Link
            to={NEWS_MANAGEMENT}
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Quản lí tin tức
          </Link>
        </li>
        <li>
          <button
            onClick={() => clickLogout()}
            className="w-full text-left py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
