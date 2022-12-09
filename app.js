var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
const authRoutes = require("./app/api/auth/router");
app.use("/auth", authRoutes);

app.listen(3000, () => console.log("server up and running"));
module.exports = app;
