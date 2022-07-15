const User = require("../models/userModel");
const catchErrorAsync = require("../utility/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("../utility/appError");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const createToken = (id) => {
    return jwt.sign()
}