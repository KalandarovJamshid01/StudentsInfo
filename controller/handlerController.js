const AppError = require("../utility/appError");
const catchErrorAsync = require("./../utility/catchError");

const getAll = async (req, res, Model, options) => {
  const data = await Model.find();

  res.status(200).json({
    results: data.length,
    status: "success",
    data: data,
  });
};

const getOne = catchErrorAsync(async (req, res, Model) => {
  const data = await Model.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: data,
  });
});

const add = async (req, res, Model) => {
  const data = Model.create(req.body);
  res.status(201).json({
    status: "succes",
    data: data,
  });
};

const update = async (req, res, Model) => {
  const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: data,
  });
};

const deleteData = async (req, res, Model) => {
  const data = await Model.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
};
module.exports = { getAll, getOne, add, update, deleteData };
