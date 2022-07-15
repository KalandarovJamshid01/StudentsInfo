const Region = require("./../model/regionModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllRegion = (req, res, next) => {
  getAll(req, res, Region);
};
const getOneRegion = (req, res, next) => {
  getOne(req, res, Region);
};
const addRegion = (req, res, next) => {
  add(req, res, Region);
};
const updateRegion = (req, res, next) => {
  update(req, res, Region);
};
const deleteRegion = (req, res, next) => {
  deleteData(req, res, Region);
};

module.exports = {
  getAllRegion,
  getOneRegion,
  addRegion,
  updateRegion,
  deleteRegion,
};
