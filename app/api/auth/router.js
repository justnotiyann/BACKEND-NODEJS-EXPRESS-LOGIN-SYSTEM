const router = require("express").Router();
const controller = require("./controller");
const middleware = require("../../middleware/auth");

router.post("/signup", controller.createUser);
router.post("/signin", controller.signIn);

router.get(
  "/all",
  middleware.checkLogin,
  middleware.checkRole,
  middleware.checkUsers,
  controller.getAllUsers
);
module.exports = router;
