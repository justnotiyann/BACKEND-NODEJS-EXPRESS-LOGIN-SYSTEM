const db = require("../config/db");
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

const Users = db.model("user", usersSchema);
module.exports = Users;
