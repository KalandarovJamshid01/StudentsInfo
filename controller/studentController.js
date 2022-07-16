const Student = require("./../model/studentModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllStudent = (req, res, next) => getAll(req, res, next, Student);
const getOneStudent = (req, res, next) => getOne(req, res, next, Student);
const addStudent = (req, res, next) => add(req, res, next, Student);
const updateStudent = (req, res, next) => update(req, res, next, Student);
const deleteStudent = (req, res, next) => deleteData(req, res, next, Student);

module.exports = {
  getAllStudent,
  getOneStudent,
  addStudent,
  updateStudent,
  deleteStudent,
};
