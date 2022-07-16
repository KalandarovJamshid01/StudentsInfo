const express = require("express");
const authController = require("./../controller/authController");
const studentController = require("./../controller/studentController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, studentController.getAllStudent)
  .post(authController.protect, studentController.addStudent);

router
  .route("/:id")
  .delete(authController.protect, studentController.deleteStudent)
  .get(authController.protect, studentController.getOneStudent)
  .patch(authController.protect, studentController.updateStudent);

module.exports = router;
