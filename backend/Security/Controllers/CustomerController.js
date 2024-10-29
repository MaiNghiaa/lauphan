const { useEffect } = require("react");
const { readData } = require("../Utils/ReadFile");
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../Mookup/data_User.json");

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
    const { email, password, ten, role } = req.body;

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

  //Thêm thông tin bàn đặt
};
