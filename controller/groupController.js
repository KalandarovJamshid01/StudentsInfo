const Group = require("./../model/groupModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllGroup = (req, res, next) => getAll(req, res, Group);
const getOneGroup = (req, res, next) => getOne(req, res, Group);
const addGroup = (req, res, next) => add(req, res, Group);
const updateGroup = (req, res, next) => update(req, res, Group);
const deleteGroup = (req, res, next) => update(req, res, Group);

module.exports = {
  getAllGroup,
  getOneGroup,
  addGroup,
  updateGroup,
  deleteGroup,
};
