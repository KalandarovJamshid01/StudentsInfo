const User = require("./../model/userModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllUser = (req, res, next) => getAll(req, res, User);
const getOneUser = (req, res, next) => getOne(req, res, User);
const addUser = (req, res, next) => add(req, res, User);
const updateUser = (req, res, next) => update(req, res, User);
const deleteUser = (req, res, next) => deleteData(req, res, User);

module.exports = {
  getAllUser,
  getOneUser,
  addUser,
  updateUser,
  deleteUser,
};

