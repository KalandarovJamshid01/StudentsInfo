const express = require("express");
const countryController = require("./../controller/countryController");
const router = express.Router();

router
  .route("/")
  .get(countryController.getAllCountry)
  .post(countryController.addCountry);

router
  .route("/:id")
  .get(countryController.getOneCountry)
  .post(countryController.addCountry)
  .patch(countryController.updateCountry);
module.exports = router;
