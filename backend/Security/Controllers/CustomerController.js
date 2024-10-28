const { useEffect } = require("react");
const { readData } = require("../Common/ReadFile");

module.exports = {
  // Login --------- đăng nhập,
  Login: async (req, res) => {
    const { email, password, Auth } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email và mật khẩu là bắt buộc.");
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
