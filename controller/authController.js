const User = require("./../model/userModel");
const catchErrorAsync = require("../utility/catchError");
const jwt = require("jsonwebtoken");
const AppError = require("../utility/appError");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_CODE, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const cookieOptions = {
  maxAge: 60 * 10 * 1000,
  httpOnly: true,
};

if (process.env.NODE_ENV === "PRODUCTION") {
  cookieOptions.secure = true;
}

const saveTokenCookie = (res, token) => {
  res.cookie("jwt", token, cookieOptions);
};

const signUp = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    photo: req.body.photo,
    passwordChangedDate: Date.now(),
  });
  const token = createToken(newUser._id);
  saveTokenCookie(res, token);
  res.status(200).json({
    status: "success",
    token: token,
    data: newUser,
  });
};

const signIn = async (req, res, next) => {
  const { email, password } = { ...req.body };
  if (!email || !password) {
    return next(new AppError("EMail yoki parol xato"));
  }
  const user = await User.findOne({ email });
  if (!user) {
    return next(new AppError("Bunday user mavjud emas"));
  }
  const tekshirHash = async (oddiyPassword, hashPassword) => {
    const tekshir = await bcrypt.compare(oddiyPassword, hashPassword);
    return tekshir;
  };
  if (!(await tekshirHash(password, user.password))) {
    return next(new AppError("Sizning parol yoki loginingiz xato", 401));
  }
  const token = createToken(user._id);
  saveTokenCookie(res, token);
  res.status(200).json({
    status: "Success",
    token: token,
  });
};

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Siz tizimga kirishingiz kerak", 401));
  }

  const tokenca = jwt.verify(token, process.env.JWT_SECRET_CODE);

  const user = await User.findById(tokenca.id);

  if (!user) {
    return next(new AppError("Bunday user mavjud emas", 401));
  }

  if (user.passwordChangedDate.getDate()) {
    if (user.passwordChangedDate.getTime() / 1000 > tokenca.iat) {
      return next(new AppError("Sizning tokeningiz yaroqsiz", 401));
    }
  }
  req.user = user;
  next();
};
module.exports = { signUp, signIn, protect };
