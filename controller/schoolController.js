const School = require("./../model/schoolModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllSchool = (req, res, next) => getAll(req, res, next, School);
const getOneSchool = (req, res, next) => getOne(req, res, next, School);
const addSchool = (req, res, next) => add(req, res, next, School);
const updateSchool = (req, res, next) => update(req, res, next, School);
const deleteSchool = (req, res, next) => deleteData(req, res, next, School);

module.exports = {
  getAllSchool,
  getOneSchool,
  addSchool,
  updateSchool,
  deleteSchool,
};
