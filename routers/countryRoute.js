const express = require("express");
const countryController = require("./../controller/countryController");
const authController = require("./../controller/authController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, countryController.getAllCountry)
  .post(authController.protect, countryController.addCountry);

router
  .route("/:id")
  .get(authController.protect, countryController.getOneCountry)
  .delete(authController.protect, countryController.deleteCountry)
  .patch(authController.protect, countryController.updateCountry);
module.exports = router;
