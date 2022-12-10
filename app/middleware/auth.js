const Users = require("../models/Users");

exports.checkRole = async (req, res, next) => {
  try {
    const role = req.session.role;
    if (role !== "admin") {
      res.status(403).json({ msg: "admin only !" });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
  }
};

exports.checkUsers = async (req, res, next) => {
  try {
    const id = req.session.id;
    const result = await Users.findOne({ _id: id });

    if (!result) {
      res.status(404).json({ msg: "user tidak ditemukan" });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
  }
};

exports.checkLogin = async (req, res, next) => {
  try {
    const isLogin = req.session.login;

    if (!isLogin) {
      res.status(401).json({ msg: "harap login ke akun anda" });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
  }
};
