const express = require("express");
const schoolController = require("./../controller/schoolController");
const router = express.Router();

router
  .route("/")
  .get(schoolController.getAllSchool)
  .post(schoolController.addSchool);

router
  .route("/:id")
  .delete(schoolController.deleteSchool)
  .get(schoolController.getOneSchool)
  .patch(schoolController.updateSchool);

module.exports = router;
