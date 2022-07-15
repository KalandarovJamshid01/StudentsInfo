const express = require("express");
const districtController = require("./../controller/districtController");
const router = express.Router();

router
  .route("/")
  .get(districtController.getAllDistrict)
  .post(districtController.addDistrict);

router
  .route("/:id")
  .delete(districtController.deleteDistrict)
  .get(districtController.getOneDistrict)
  .patch(districtController.updateDistrict);
module.exports = router;
