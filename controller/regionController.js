const Region = require("./../model/regionModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllRegion = (req, res, next) => {
  getAll(req, res, next, Region);
};
const getOneRegion = (req, res, next) => {
  getOne(req, res, next, Region);
};
const addRegion = (req, res, next) => {
  add(req, res, next, Region);
};
const updateRegion = (req, res, next) => {
  update(req, res, next, Region);
};
const deleteRegion = (req, res, next) => {
  deleteData(req, res, next, Region);
};

module.exports = {
  getAllRegion,
  getOneRegion,
  addRegion,
  updateRegion,
  deleteRegion,
};
