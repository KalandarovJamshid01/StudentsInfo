const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: { type: Number },
  groupId: {
    type: mongoose.Schema.ObjectId,
    ref: "groups",
  },
});

const Student = mongoose.model("students", studentSchema);

module.exports = Student;
