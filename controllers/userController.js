const User = require("../models/userModel");

exports.index = (req, res) => {
  res.render("index");
};

exports.viewLoginPage = (req, res) => {
  res.render("login");
};

exports.viewRegisterPage = (req, res) => {
  res.render("register");
};

exports.processLogoff = (req, res) => {
  // Assuming you have some kind of session or authentication system
  req.session.destroy(() => {
    res.redirect("/");
  });
};
