const express = require("express");
const AppError = require("./../utility/appError");
const errorController = require("./../utility/errorController");
const app = express();
app.use(express.json());

const countryRoute = require("./../routers/countryRoute");
const regionRoute = require("./../routers/regionRoute");
const districtRoute = require("./../routers/districtRoute");
const groupRoute = require("./../routers/groupRoute");
const schoolRoute = require("./../routers/schoolRoute");
const studentRoute = require("./../routers/studentRoute");
const userRoute = require("./../routers/userRoute");

app.use("/api/v1/country", countryRoute);
app.use("/api/v1/region", regionRoute);
app.use("/api/v1/district", districtRoute);
app.use("/api/v1/group", groupRoute);
app.use("/api/v1/school", schoolRoute);
app.use("/api/v1/student", studentRoute);
app.use("/api/v1/user", userRoute);

app.all("*", function (req, res, next) {
  next(new AppError(`this url has not found: ${req.originalUrl}`, 404));
});
app.use(errorController);

module.exports = app;
