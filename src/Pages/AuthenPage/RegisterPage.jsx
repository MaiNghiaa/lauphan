import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
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

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu không khớp
    if (formData.password !== formData.confirmPassword) {
      console.error("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/Register",
    //     formData
    //   );
    //   if (response.status === 201) {
    //     console.log("Đăng ký thành công:", response.data);
    //     navigate("/login"); // Chuyển hướng về trang đăng nhập sau khi đăng ký thành công
    //   }
    // } catch (error) {
    //   if (error.response && error.response.status === 400) {
    //     console.error("Lỗi đăng ký:", error.response.data.message);
    //   } else {
    //     console.error("Lỗi khi đăng ký:", error.message);
    //   }
    // }
  };

  return (
    <div className="lp-address-page pt-[70.15px] pb-[250px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px]">
            <div className="title-address text-center">Đăng ký</div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px] flex items-center justify-center">
            <form onSubmit={handleSubmit}>
              <div className="main-content-address w-full flex flex-col items-start justify-center ">
                <div className="OTPcode text-left">Nhập tên người dùng</div>
                <div className="form-login-cam mb-[25px]">
                  <input
                    type="text"
                    className="form-control text-left outline-none"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Tên người dùng"
                  />
                </div>

                <div className="OTPcode text-left">Nhập số điện thoại</div>
                <div className="form-login-cam mb-[25px]">
                  <input
                    type="text"
                    className="form-control text-left outline-none"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
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
                    placeholder="Mật khẩu"
                  />
                </div>

                <div className="OTPcode text-left">Xác nhận mật khẩu</div>
                <div className="form-login-cam mb-[15px]">
                  <input
                    type="password"
                    className="form-control text-left outline-none"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Xác nhận mật khẩu"
                  />
                </div>

                <div className="pt-[15px] self-center">
                  <button
                    type="submit"
                    className="bnt-sendotp border-[1px] h-[31pt] border-solid border-[#ff6a00] bg-[#ff6a00] text-white font-medium rounded-[25px] w-[139pt] text-[12pt]"
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
