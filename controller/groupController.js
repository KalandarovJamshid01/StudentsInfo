const Group = require("./../model/groupModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllGroup = (req, res, next) => getAll(req, res, next, Group);
const getOneGroup = (req, res, next) => getOne(req, res, next, Group);
const addGroup = (req, res, next) => add(req, res, next, Group);
const updateGroup = (req, res, next) => update(req, res, next, Group);
const deleteGroup = (req, res, next) => update(req, res, next, Group);

module.exports = {
  getAllGroup,
  getOneGroup,
  addGroup,
  updateGroup,
  deleteGroup,
};
