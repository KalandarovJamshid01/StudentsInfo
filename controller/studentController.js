const Student = require("./../model/studentModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllStudent = (req, res, next) => getAll(req, res, Student);
const getOneStudent = (req, res, next) => getOne(req, res, Student);
const addStudent = (req, res, next) => add(req, res, Student);
const updateStudent = (req, res, next) => update(req, res, Student);
const deleteStudent = (req, res, next) => deleteData(req, res, Student);

module.exports = {
  getAllStudent,
  getOneStudent,
  addStudent,
  updateStudent,
  deleteStudent,
};
