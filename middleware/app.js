const express = require("express");
const app = express();
app.use(express.json());

const countryRoute = require("./../routers/countryRoute");
const regionRoute = require("./../routers/regionRoute");
const districtRoute = require("./../routers/districtRoute");
const schoolRoute = require("./../routers/schoolRoute");
const studentRoute = require("./../routers/studentRoute");

app.use("/api/v1/country", countryRoute);
app.use("/api/v1/region", regionRoute);
app.use("/api/v1/district", districtRoute);
app.use("/api/v1/school", schoolRoute);
app.use("/api/v1/student", studentRoute);
module.exports = app;
