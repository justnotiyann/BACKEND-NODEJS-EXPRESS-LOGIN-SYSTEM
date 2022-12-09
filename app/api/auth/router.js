const router = require("express").Router();
const controller = require("./controller");

router.post("/signup", controller.createUser);
router.get("/all", controller.getAllUsers);

module.exports = router;
