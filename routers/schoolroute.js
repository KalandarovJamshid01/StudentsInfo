const express = require("express");
const authController = require("./../controller/authController");
const schoolController = require("./../controller/schoolController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, schoolController.getAllSchool)
  .post(schoolController.addSchool);

router
  .route("/:id")
  .delete(authController.protect, schoolController.deleteSchool)
  .get(authController.protect, schoolController.getOneSchool)
  .patch(authController.protect, schoolController.updateSchool);

module.exports = router;
