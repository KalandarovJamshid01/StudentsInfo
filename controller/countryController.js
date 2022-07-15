const Country = require("../model/countryModel");
const catchErrorAsync = require("./../utility/catchError");
const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllCountry = catchErrorAsync((req, res, next) => {
  getAll(req, res, Country);
});
const getOneCountry = (req, res, next) => {
  getOne(req, res, Country);
};
const addCountry = (req, res, next) => {
  add(req, res, Country);
};
const updateCountry = (req, res, next) => {
  update(req, res, Country);
};
const deleteCountry = (req, res, next) => {
  deleteData(req, res, Country);
};

module.exports = {
  getAllCountry,
  getOneCountry,
  addCountry,
  updateCountry,
  deleteCountry,
};
