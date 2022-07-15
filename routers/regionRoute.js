const express = require("express");
const regionController = require("./../controller/regionController");
const router = express.Router();

router
  .route("/")
  .get(regionController.getAllRegion)
  .post(regionController.addRegion);

router
  .route("/:id")
  .get(regionController.getOneRegion)
  .patch(regionController.updateRegion)
  .delete(regionController.deleteRegion);

module.exports = router;
