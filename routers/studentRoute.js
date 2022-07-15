const express = require("express");
const studentController = require("./../controller/studentController");
const router = express.Router();

router
  .route("/")
  .get(studentController.getAllStudent)
  .post(studentController.addStudent);

router
  .route("/:id")
  .delete(studentController.deleteStudent)
  .get(studentController.getOneStudent)
  .patch(studentController.updateStudent);

module.exports = router;
