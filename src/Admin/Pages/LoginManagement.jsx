import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
  const from = location.state?.from?.pathname || "/admin/dashboard";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/Login",
        formData
      );
      if (response.status === 200) {
        console.log("Login thành công:", response.data);
        localStorage.setItem("userRole", response.data.user.role);

        if (response.data.user.role !== "admin") {
          setError("Bạn không có quyền truy cập vào trang này ");
        } else {
          // Convert response.data.user to JSON string before saving
          localStorage.setItem("dataUser", JSON.stringify(response.data.user));
          localStorage.setItem("idUser", response.data.user.id);
          console.log(response.data.user);
        }
        setUserRole(response.data.user.role);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Endpoint không tìm thấy.");
      } else {
        console.error("Lỗi khi đăng nhập:", error.message);
      }
    }
  };

  useEffect(() => {
    // Redirect to admin dashboard if user role is admin
    if (userRole === "admin") {
      navigate(from, { replace: true });
    }
  }, [userRole, navigate, from]);

  useEffect(() => {
    // Update the role if it changes in localStorage (even in another tab)
    const handleStorageChange = () => {
      setUserRole(localStorage.getItem("userRole"));
    };

    // Listen for storage changes
    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="min-h-screen lp-address-page pt-[70.15px] pb-[250px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px]">
            <div className="title-address text-center">Đăng nhập</div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px] flex items-center justify-center">
            <form onSubmit={handleSubmit}>
              <div className="main-content-address w-full flex flex-col items-start justify-center ">
                <div className="mt-1 text-[#ff0000]">{error}</div>

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
          </div>
        </div>
      </div>
    </div>
  );
}
