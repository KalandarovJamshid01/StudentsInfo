const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [
      validator.isEmail,
      "This email is ignore.Please write correct email",
    ],
    unique: true,
  },
  photo: String,
  password: {
    type: String,
    required: true,
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Siz bir xil password kiritishingiz kerak",
    },
  },
  role: {
    type: String,
    enum: ["admin", "student", "teacher"],
    default: "student",
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
