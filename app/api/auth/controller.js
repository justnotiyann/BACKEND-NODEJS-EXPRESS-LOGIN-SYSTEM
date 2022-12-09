const Users = require("../../models/Users");
const argon2 = require("argon2");

exports.createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const hashPass = await argon2.hash(password, 10);
    const result = new Users({ email, password: hashPass }).save();

    if (!result) res.status(500).json({ msg: "server error" });
    res.status(201).json({ msg: "success to create user" });
  } catch (e) {
    console.log(e);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await Users.find().select("_id email");

    if (!result) res.status(500).json({ msg: "server error" });
    res
      .status(200)
      .json({ msg: "here all account registered on server", data: result });
  } catch (e) {
    console.log(e);
  }
};