const express = require("express");
const nodemailer = require("nodemailer");
var email;
var otp;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",
  auth: {
    user: "",
    pass: "",
  },
});
const sendOtp = (req, res, next) => {
  otp = Math.random();
  otp = otp * 1000000;
  otp = parseInt(otp);
  console.log(otp);
  email = req.body.email;
  console.log(email);
  // send mail with defined transport object
  var mailOptions = {
    to: req.body.email,
    subject: "Otp for order Confirmation ",
    html:
      "<h3>OTP for order confirmation is </h3>" +
      "<h1 style='font-weight:bold;'>" +
      otp +
      "</h1>", // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.render("otp");
  });
};
const verifyOtp = (req, res, next) => {
  if (req.body.otp == otp) {
    res.send(true);
  } else {
    res.send(false);
  }
};
const sendReceipt = (req, res, next) => {
  var mailOptions = {
    to: req.body.email,
    subject: "Receipt of your order ",
    html:
      "<h3>Please find your details below </h3>" +
      "<p>Product ID: " +
      req.body.productId +
      "</p>" +
      "<p> Name: " +
      req.body.firstName +
      " " +
      req.body.lastName +
      "</p>" +
      "<p> Email: " +
      req.body.email +
      "</p>" +
      "<p> Contact: " +
      req.body.contact +
      "</p>" +
      "<p> Address: " +
      req.body.address +
      "</p>" +
      "<h3>Product Renting duration: </h3>" +
      "<p> From Date: " +
      req.body.fromDate +
      "</p>" +
      "<p> To Date: " +
      req.body.toDate +
      "</p>" +
      "<p> Total Days of renting: " +
      req.body.totalDays +
      " Days</p>" +
      "<p> Total Prize: " +
      req.body.totalPrize +
      "Rs. for " +
      req.body.totalDays +
      " Days</p>", // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.render("otp");
  });
};
module.exports = {
  sendOtp,
  verifyOtp,
  sendReceipt,
};
