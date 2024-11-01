import React, { useEffect, useState } from "react";
// import dataUser from "../../Mookup/dataUser.json";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { REGISTER } from "../../Router/Path";
export default function AuthPage() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUserData } = useAuth();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    try {
      const response = await axios.post(
        "http://localhost:3000/Login",
        formData
      );
      if (response.status === 200) {
        console.log("Đăng nhập thành công:", response.data);

        setIsAuthenticated(true);
        navigate("/dat-ban");
        // Thực hiện các hành động tiếp theo khi đăng nhập thành công
        localStorage.setItem("username", response.data.user.name);
        localStorage.setItem("UserID", response.data.user.id);
        setUserData(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Endpoint không tìm thấy.");
      } else {
        console.error("Lỗi khi đăng nhập:", error.message);
      }
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="lp-address-page pt-[70.15px] pb-[250px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px]">
            <div className="title-address text-center">Đăng nhập</div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] flex-col max-w-full w-full relative px-[15px] flex items-center justify-center">
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
                    type="password"
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
                    className="bnt-sendotp border-[1px] h-[31pt] border-solid border-[#ff6a00] bg-[#ff6a00] text-white font-medium rounded-[25px] w-[139pt] text-[12pt]"
                    id="send-otp"
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
            </form>

            <Link to={REGISTER}>
              <button className="mt-3 bnt-sendotp border-[1px] h-[31pt] border-solid border-[#ff6a00] bg-[#ff6a00] text-white font-medium rounded-[25px] w-[139pt] text-[12pt]">
                Đăng kí
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
