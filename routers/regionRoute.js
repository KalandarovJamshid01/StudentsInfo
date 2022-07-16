const express = require("express");
const authController = require("./../controller/authController");
const regionController = require("./../controller/regionController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, regionController.getAllRegion)
  .post(authController.protect, regionController.addRegion);

router
  .route("/:id")
  .get(authController.protect, regionController.getOneRegion)
  .patch(authController.protect, regionController.updateRegion)
  .delete(authController.protect, regionController.deleteRegion);

module.exports = router;
