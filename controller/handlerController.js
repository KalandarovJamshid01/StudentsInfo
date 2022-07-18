const AppError = require("../utility/appError");
const catchErrorAsync = require("./../utility/catchError");

const getAll = catchErrorAsync(async (req, res, Model, options) => {
  let datas;
  if (options) {
    datas = await Model.find().populate({
      path: options.path,
      select: options.select,
    });
  } else {
    datas = await Model.find();
  }

  res.status(200).json({
    status: "Success",
    results: datas.length,
    data: datas,
  });
});

const getOne = catchErrorAsync(async (req, res, Model) => {
  const data = await Model.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: data,
  });
});

const add = catchErrorAsync(async (req, res, Model) => {
  const data = Model.create(req.body);
  res.status(201).json({
    status: "succes",
    data: data,
  });
});

const update = catchErrorAsync(async (req, res, Model) => {
  const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: data,
  });
});

const deleteData = catchErrorAsync(async (req, res, Model) => {
  const data = await Model.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
module.exports = { getAll, getOne, add, update, deleteData };
