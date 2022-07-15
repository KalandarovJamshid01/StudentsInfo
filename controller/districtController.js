const District = require("./../model/districtModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllDistrict = (req, res, next) => getAll(req, res, District);
const getOneDistrict = (req, res, next) => getOne(req, res, District);
const addDistrict = (req, res, next) => add(req, res, District);
const updateDistrict = (req, res, next) => update(req, res, District);
const deleteDistrict = (req, res, next) => deleteData(req, res, District);

module.exports = {
  getAllDistrict,
  getOneDistrict,
  addDistrict,
  updateDistrict,
  deleteDistrict,
};
