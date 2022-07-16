const express = require("express");
const authController = require("./../controller/authController");
const districtController = require("./../controller/districtController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, districtController.getAllDistrict)
  .post(authController.protect, districtController.addDistrict);

router
  .route("/:id")
  .delete(authController.protect, districtController.deleteDistrict)
  .get(authController.protect, districtController.getOneDistrict)
  .patch(authController.protect, districtController.updateDistrict);
module.exports = router;
