const AppError = require("./appError");

const catchErrorAsync = (funksiya) => {
  const catchFunc = (req, res, next) => {
    try {
      funksiya(req, res, next) = {

      }
    }
    catch (err) {
      next(new AppError(err));
    }
    
  };
  return catchFunc;
};

module.exports = catchErrorAsync;
