import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AUTHENPAGE } from "../../Router/Path";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    email: "",
    gender: "",
    address: "",
    city: "",
    district: "",
    role: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu không khớp
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    // Kiểm tra giới tính (gender) chỉ được là 1 hoặc 2
    if (formData.gender !== "1" && formData.gender !== "2") {
      setErrorMessage("Giới tính chỉ có thể là 1 (Nam) hoặc 2 (Nữ).");
      return;
    }

    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:3000/register", {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        email: formData.email,
        gender: parseInt(formData.gender),
        address: formData.address,
        city: formData.city,
        district: formData.district,
        role: "user",
      });

      if (response.status === 201) {
        console.log("Đăng ký thành công:", response.data);
        navigate(AUTHENPAGE);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Lỗi đăng ký: " + error.response.data.message);
      } else {
        setErrorMessage("Lỗi khi đăng ký: " + error.message);
      }
    }
  };

  return (
    <div className="lp-address-page pt-[70.15px] pb-[250px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px]">
            <div className="title-address text-center text-2xl font-bold mb-6">
              Đăng ký
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px] flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="main-content-address w-full flex flex-col items-start justify-center ">
                {errorMessage && (
                  <div className="text-red-500 text-center mb-4">
                    {errorMessage}
                  </div>
                )}
                <InputField
                  label="Họ tên"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  label="Số điện thoại"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <InputField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  label="Giới tính (1 - Nam, 2 - Nữ)"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
                <InputField
                  label="Địa chỉ"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <InputField
                  label="Thành phố"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                <InputField
                  label="Quận/Huyện"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                />
                <InputField
                  label="Mật khẩu"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <InputField
                  label="Xác nhận mật khẩu"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

                <div className="pt-[15px] self-center">
                  <button
                    type="submit"
                    className="bnt-sendotp border-[1px] h-[31pt] border-solid border-[#ff6a00] bg-[#ff6a00] text-white font-medium rounded-[25px] w-[139pt] text-[12pt] hover:bg-[#e55b00]"
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

function InputField({ label, name, type = "text", value, onChange }) {
  return (
    <div className="mb-[25px] w-full">
      <label className="OTPcode text-left mb-1 block">{label}</label>
      <input
        type={type}
        className="form-control text-left outline-none w-full p-2 border border-gray-300 rounded"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        required
      />
    </div>
  );
}
