const District = require("./../model/districtModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllDistrict = (req, res, next) => getAll(req, res,next, District);
const getOneDistrict = (req, res, next) => getOne(req, res, next, District);
const addDistrict = (req, res, next) => add(req, res, next, District);
const updateDistrict = (req, res, next) => update(req, res, next, District);
const deleteDistrict = (req, res, next) => deleteData(req, res, next, District);

module.exports = {
  getAllDistrict,
  getOneDistrict,
  addDistrict,
  updateDistrict,
  deleteDistrict,
};
