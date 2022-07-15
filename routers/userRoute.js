const router = require("express").Router();
const userController = require("../controller/userController");
const authController = require("./../controller/authController");
router.route("/").get(userController.getAllUser).post(userController.addUser);
router
  .route("/:id")
  .get(userController.getOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route("/signUp").post(authController.signUp);
module.exports = router;
