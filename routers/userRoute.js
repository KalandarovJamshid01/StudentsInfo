const router = require("express").Router();
const authController = require("./../controller/authController");
const userController = require("../controller/userController");
router
  .route("/")
  .get(authController.protect, userController.getAllUser)
  .post(authController.protect, userController.addUser);
router
  .route("/:id")
  .get(authController.protect, userController.getOneUser)
  .patch(authController.protect, userController.updateUser)
  .delete(authController.protect, userController.deleteUser);

router.route("/signUp").post(authController.signUp);
router.route("/signIn").post(authController.signIn);
module.exports = router;
