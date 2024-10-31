const db = require("../Database");

module.exports = {
  // Login --------- đăng nhập,
  Login: async (req, res) => {
    const { phoneNumber, password } = req.body;

    if (!phoneNumber || !password) {
      return res.status(400).send("phone và mật khẩu là bắt buộc.");
    }
    const query = "SELECT * FROM users WHERE phoneNumber = ? AND password = ?";

    db.query(query, [phoneNumber, password], (error, results) => {
      if (error) {
        console.error("Error during login query:", error);
        return res.status(500).json({ error: "Database error" });
      }

      if (results.length > 0) {
        res.status(200).json({ message: "Login successful", user: results[0] });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    });
  },

  // Register Đăng kí
  register: (req, res) => {
    const { email, password, ten } = req.body;

    if (!email || !password || !ten) {
      return res.status(400).send("Email, password, and name are required.");
    }
  },

  //Hiển thị thông tin bàn đặt
  getBooking: (req, res) => {
    const query = `SELECT * FROM booking`;

    db.query(query, (error, results) => {
      if (error) {
        console.error("Error Read booking:", error);
        return res.status(500).json({ error: "Database error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res
        .status(200)
        .json({ message: "Booking Read successfully", data: results });
    });
  },

  //update thông tin bàn đặt
  updateBooking: (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    const query = `
    UPDATE booking SET status = ? WHERE id = ?`;
    db.query(query, [status, id], (error, results) => {
      if (error) {
        console.error("Error updating booking:", error);
        return res.status(500).json({ error: "Database error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.status(200).json({ message: "Booking updated successfully" });
    });
  },

  //Xóa thông tin bàn đặt
  deleteBooking: (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM Booking WHERE id = ?`;

    db.query(query, [id], (error, results) => {
      if (error) {
        console.error("Error deleting booking:", error);
        return res.status(500).json({ error: "Database error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.status(200).json({ message: "Booking deleted successfully" });
    });
  },

  //Đặt bàn
  createBooking: async (req, res) => {
    const {
      restaurant,
      peopleCount,
      day,
      Hour,
      Name,
      phoneNumber,
      Note,
      userID,
    } = req.body;

    console.log(
      restaurant,
      peopleCount,
      day,
      Hour,
      Name,
      phoneNumber,
      Note,
      userID
    );
    const query = `
      INSERT INTO Booking (restaurant, peopleCount, Day, Hour, Name, phoneNumber, Note, userID)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      query,
      [restaurant, peopleCount, day, Hour, Name, phoneNumber, Note, userID],
      (error, results) => {
        if (error) {
          console.error("Error creating booking:", error);
          return res.status(500).json({ error: "Database error" });
        }
        res.status(201).json({
          message: "Booking created successfully",
          bookingId: results.insertId,
        });
      }
    );
    // console.log(
    //   restaurant,
    //   peopleCount,
    //   day,
    //   hour,
    //   name,
    //   phoneNumber,
    //   note,
    //   userID
    // );
  },

  //Hiển thị thông tin tin tức
  getNews: (req, res) => {
    const query = "SELECT * FROM News ORDER BY created_at DESC";

    db.query(query, (error, results) => {
      if (error) {
        console.error("Error fetching news:", error);
        return res.status(500).json({ error: "Database error" });
      }
      res.status(200).json({ news: results });
    });
  },

  getUsers: (req, res) => {
    const query = "SELECT * FROM Users ORDER BY created_at DESC";

    db.query(query, (error, results) => {
      if (error) {
        console.error("Error fetching news:", error);
        return res.status(500).json({ error: "Database error" });
      }
      res.status(200).json({ users: results });
    });
  },
};
