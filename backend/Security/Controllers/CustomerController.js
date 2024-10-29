// const { useEffect } = require("react");
// const { readData } = require("../Utils/ReadFile");
const jsonfile = require("jsonfile");
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../Mookup/data_User.json");
const BookingFilePath = path.join(__dirname, "../Mookup/data_Booking.json");

module.exports = {
  // Login --------- đăng nhập,
  Login: async (req, res) => {
    const { phoneNumber, password } = req.body;

    if (!phoneNumber || !password) {
      return res.status(400).send("phone và mật khẩu là bắt buộc.");
    }
    const dataUser = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    const user = dataUser.find(
      (user) => user.phoneNumber === phoneNumber && user.password === password
    );
    if (user) {
      console.log("Đăng nhập thành công");
      res.status(200).json({
        success: true,
        data: user,
        message: "Đăng nhập thành công",
      });
    } else {
      return res.status(400).send("Tài khoản hoặc mật khẩu sai.");
    }
  },

  // Register Đăng kí
  register: (req, res) => {
    const { email, password, ten } = req.body;

    if (!email || !password || !ten) {
      return res.status(400).send("Email, password, and name are required.");
    }
  },

  //Hiển thị thông tin bàn đặt
  readReservationinfor: () => {
    return;
  },

  //Sửa thông tin bàn đặt

  //Xóa thông tin bàn đặt

  //add New Booking
  // Add New Booking with Error Handling
  // const { restaurant, peopleCount, Day, Hour, Note, Name, phoneNumber } =
  //   req.body;
  // const newData = {
  //   id: dataBooking.length + 1,
  //   restaurant: restaurant,
  //   peopleCount: peopleCount,
  //   Day: Day,
  //   Hour: Hour,
  //   Name: Name,
  //   phoneNumber: phoneNumber,
  //   Note: Note,
  // };

  Booking: async (req, res) => {
    res.status(200).json({
      success: true,
      message: "Đặt bàn thành công",
    });
  },
};
