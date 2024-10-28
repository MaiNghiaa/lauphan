import React, { useState } from "react";
import dataUser from "../../Mookup/dataUser.json";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import BookingPage from "../BookingPage/BookingPage";
export default function AuthPage() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    const found = dataUser.some(
      (user) =>
        user.phoneNumber === formData.phoneNumber &&
        user.password === formData.password
    );
    if (found) {
      console.log("Đăng nhập thành công");
      setIsAuthenticated(true);
      navigate(BookingPage);
    } else {
      console.log("error");
    }
  };
  return (
    <div className="lp-address-page pt-[70.15px] pb-[250px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px]">
            <div className="title-address text-center">Đăng nhập</div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px] flex items-center justify-center">
            <form onSubmit={handleSubmit}>
              <div className="main-content-address w-full  flex flex-col items-start justify-center ">
                {/* <div class="title-pu py-[20px] text-[16pt] text-[#ff6a00] font-bold"></div> */}
                <div className="OTPcode text-left">Nhập số điện thoại</div>
                <div className="form-login-cam mb-[25px]">
                  <input
                    type="text"
                    className="form-control text-left outline-none"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    id="phoneNumber"
                    placeholder="Số điện thoại"
                  />
                </div>

                <div className="OTPcode text-left">Nhập mật khẩu</div>
                <div className="form-login-cam mb-[15px]">
                  <input
                    type="text"
                    className="form-control text-left outline-none"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="Mật khẩu"
                  />
                </div>

                {/* <label
                  id="error"
                  className="error max-w-full text-[red]"
                  for="" 
                >
                  Số điện thoại phải có 10 chữ số
                </label> */}

                <div className="pt-[15px] self-center">
                  <button
                    type="submit"
                    class="bnt-sendotp border-[1px] h-[31pt] border-solid border-[#ff6a00] bg-[#ff6a00] text-white font-medium rounded-[25px] w-[139pt] text-[12pt]"
                    id="send-otp"
                  >
                    Đăng nhập
                  </button>
                </div>
                <button className="self-center px-4 py-2 text-[16px] font-semibold">
                  Đăng kí
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
