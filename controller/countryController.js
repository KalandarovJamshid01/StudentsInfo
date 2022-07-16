const Country = require("../model/countryModel");
const catchErrorAsync = require("./../utility/catchError");
const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllCountry = (req, res, next) => {
  getAll(req, res, next, Country);
};
const getOneCountry = (req, res, next) => {
  getOne(req, res, next, Country);
};
const addCountry = (req, res, next) => {
  add(req, res, next, Country);
};
const updateCountry = (req, res, next) => {
  update(req, res, next, Country);
};
const deleteCountry = (req, res, next) => {
  deleteData(req, res, next, Country);
};

module.exports = {
  getAllCountry,
  getOneCountry,
  addCountry,
  updateCountry,
  deleteCountry,
};
