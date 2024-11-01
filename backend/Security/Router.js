// router.js

"use strict";
const multer = require("multer");
const express = require("express");
const path = require("path");
const ProductsController = require("./Controllers/CustomerController");
// const AdminController = require("./Controller/AdminController");

module.exports = function (app) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "assets/"); // Thư mục lưu trữ tệp
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên tệp
    },
  });

  const upload = multer({ storage: storage });
  // Sử dụng middleware để phục vụ file tĩnh từ thư mục 'assets'
  app.use("/assets", express.static("assets"));

  //cac route

  app.route("/Login").post(ProductsController.Login);
  app.route("/register").post(ProductsController.register);

  //Booking
  app.route("/Booking").get(ProductsController.getBooking);
  app.route("/Booking/Create").post(ProductsController.createBooking);
  app.route("/Booking/Update/:id").post(ProductsController.updateBooking);
  app.route("/Booking/Delete").delete(ProductsController.deleteBooking);

  app.route("/users").get(ProductsController.getUsers);

  app.route("/News").get(ProductsController.getNews);
};
