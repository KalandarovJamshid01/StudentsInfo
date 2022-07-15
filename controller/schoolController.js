const School = require("./../model/schoolModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllSchool = (req, res, next) => getAll(req, res, School);
const getOneSchool = (req, res, next) => getOne(req, res, School);
const addSchool = (req, res, next) => add(req, res, School);
const updateSchool = (req, res, next) => update(req, res, School);
const deleteSchool = (req, res, next) => deleteData(req, res, School);

module.exports = {
  getAllSchool,
  getOneSchool,
  addSchool,
  updateSchool,
  deleteSchool,
};
