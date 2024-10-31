import React, { useEffect, useState } from "react";
import Address from "../../Mookup/dataAddress.json";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AUTHENPAGE } from "../../Router/Path";
import axios from "axios";
import Dialog from "../../Components/Dialog";

export default function BookingPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState(""); // Message for popup dialog
  const [selectChoose, setSelectChoose] = useState("");
  const [peopleCount, setPeopleCount] = useState("2");
  const [day, setDay] = useState("0");
  const [Hour, setHour] = useState("0");
  const [Note, setNote] = useState("");
  const [Name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate(AUTHENPAGE);
  }, [isAuthenticated, navigate]);

  const onCloseDialog = () => {
    setOpenDialog(false);
    setDialogMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!selectChoose) {
      setDialogMessage("Vui lòng chọn nhà hàng.");
      setOpenDialog(true);
      return;
    }
    if (!peopleCount) {
      setDialogMessage("Vui lòng chọn số người.");
      setOpenDialog(true);
      return;
    }
    if (!day || day === "0") {
      setDialogMessage("Vui lòng chọn ngày.");
      setOpenDialog(true);
      return;
    }
    if (!Hour || Hour === "0") {
      setDialogMessage("Vui lòng chọn giờ.");
      setOpenDialog(true);
      return;
    }
    if (!Name.trim()) {
      setDialogMessage("Vui lòng nhập tên.");
      setOpenDialog(true);
      return;
    }
    if (!phoneNumber.trim()) {
      setDialogMessage("Vui lòng nhập số điện thoại.");
      setOpenDialog(true);
      return;
    }

    // Kiểm tra định dạng số điện thoại
    const phoneRegex = /^[0-9]{10,11}$/; // Chấp nhận 10-11 chữ số
    if (!phoneRegex.test(phoneNumber)) {
      setDialogMessage(
        "Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng."
      );
      setOpenDialog(true);
      return;
    }

    // Dữ liệu đặt bàn hợp lệ, tạo yêu cầu API
    const idUser = localStorage.getItem("UserID");
    const bookingData = {
      restaurant: selectChoose,
      peopleCount,
      day,
      Hour,
      Note,
      Name,
      phoneNumber,
      userID: idUser,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/Booking/Create",
        bookingData
      );
      if (response.status === 200) {
        setDialogMessage("Đặt bàn thành công!");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setDialogMessage("Endpoint không tìm thấy.");
      } else {
        setDialogMessage("Lỗi khi đăng nhập: " + error.message);
      }
    } finally {
      setOpenDialog(true);
    }
  };
  return isAuthenticated ? (
    <div className="lp-address-page pt-[70.15px] pb-[250px] bg-white">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap mx-[-15px]">
            <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px]">
              <div className="title-address text-center select-none">
                Đặt bàn
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-15px] main-content-address select-none">
            <div className="flex-[33.333333333%] max-w-[33.333333333%] w-full relative px-[15px]">
              <div className=" w-full  flex flex-col items-center justify-center">
                <div className="title-cam-order self-start">Nhà hàng</div>
                <div className="chose-thuong-hieu pt-[25px] self-start">
                  <div id="btn1" style={{ backgroundColor: "#e84a1b" }}>
                    <img
                      alt=""
                      className="branch-icon"
                      src="https://phanexpress.com/WebLauPhan/order/phan-icon-selected.svg"
                    />
                    <div>Phan</div>
                  </div>
                </div>
                <div className="form-chose-coso flex justify-stretch flex-col self-start w-full">
                  <label className="max-w-full inline-block mb-[0.5rem]">
                    Chọn cơ sở
                  </label>
                  <select
                    className="form-control w-full border-0 border-b-[1px] border-[#495057] outline-none"
                    id="selectCoso"
                    onChange={(e) => setSelectChoose(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Chọn
                    </option>
                    {Address.map((item, index) => (
                      <option
                        key={index}
                        value={item.title}
                        className="cursor-pointer"
                      >
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  id="address"
                  className="pl-3 pt-[30px] text-[14px] font-light self-start"
                >
                  {Address.find((item) => item.title === selectChoose)
                    ? Address.find((item) => item.title === selectChoose)
                        .addressDetail
                    : "Chọn vị trí"}
                </div>
              </div>
            </div>
            <div className="flex-[33.333333333%] max-w-[33.333333333%] w-full relative px-[15px]">
              <div className="slot">
                <label className="max-w-full inline-block mb-[0.5rem]">
                  Số người
                </label>
                <select
                  id="selectSoNguoi"
                  onChange={(e) => setPeopleCount(e.target.value)}
                  className="form-control p-[0.375rem_0.75rem] border-0 border-b-[1px] border-[#495057] outline-none"
                >
                  <option>2</option>
                  <option>2</option>
                  <option>2</option>
                </select>
              </div>
              <div className="date-order pt-[55px] flex items-center justify-between">
                <div className="ngay w-[142px] mr-[70px]">
                  <div className="relative">
                    <label className="inline-block mb-[0.5rem]">Ngày</label>
                    <select
                      id="selectDay"
                      onChange={(e) => setDay(e.target.value)}
                      className="form-control border-0 border-b-[1px] border-[#495057] outline-none"
                    >
                      <option value="Hôm nay" selected="">
                        Hôm nay
                      </option>
                      <option value="Ngày mai">Ngày mai</option>
                      <option value="Ngày kia">Ngày kia</option>
                    </select>
                  </div>
                </div>
                <div className="gio w-[142px]">
                  <div className="relative">
                    <label className="inline-block mb-[0.5rem]">Giờ</label>
                    <select
                      id="selectHour"
                      onChange={(e) => setHour(e.target.value)}
                      className="form-control border-0 border-b-[1px] border-[#495057] outline-none"
                    >
                      <option value="0" selected="">
                        Chọn
                      </option>
                      <option value="8:00-9:00">8:00-9:00</option>
                      <option value="9:00-10:00">9:00-10:00</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="slot">
                <label className="max-w-full inline-block pt-[55px]">
                  Ghi chú
                </label>
                <input
                  type="text"
                  onChange={(e) => setNote(e.target.value)}
                  className="form-control border-0 border-b-[1px] border-[#495057] outline-none"
                />
              </div>
            </div>
            <div className="flex-[33.333333333%] max-w-[33.333333333%] w-full relative px-[15px]">
              <div className="name">
                <label className="max-w-full inline-block ">
                  Tên người đặt
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="form-control border-0 border-b-[1px] border-[#495057] outline-none"
                />
              </div>
              <div className="phoneNumber">
                <label className="max-w-full inline-block pt-[70px]">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-control border-0 border-b-[1px] border-[#495057] outline-none"
                />
              </div>
              <div className="btn-lp pt-[22px]">
                <button
                  className="btn-datmua bg-[#e84a1b] h-[52px] rounded-[45px] flex justify-center items-center w-full text-white font-bold"
                  id="btn-datban"
                  style={{ background: "#e84a1b" }}
                >
                  Đặt bàn
                </button>

                <button
                  className="btn-datmua btn-loading "
                  id="btn-datban-loading"
                >
                  <img src="/WebLauPhan/common/loading.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-15px]">
            <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px]  font-normal">
              <div className="title-last-row text-center">
                LƯU Ý:
                <br /> Chỉ khi nhận được SMS hoặc thông báo trên app Phan
                Express, yêu cầu của bạn mới được coi là đặt bàn thành công. Khi
                nhận được cuộc gọi nhỡ từ hệ thống vui lòng liên hệ lại hotline
                để được hỗ trợ đặt bàn!
              </div>
            </div>
          </div>
        </form>
      </div>
      {openDialog && (
        <Dialog
          status={200}
          onCloseDialog={onCloseDialog}
          message={dialogMessage}
        />
      )}
    </div>
  ) : null;
}
