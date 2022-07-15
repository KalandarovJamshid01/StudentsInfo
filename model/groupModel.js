const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.ObjectId,
    ref: "schools",
  },
});

const Group = mogoose.model("groups", groupSchema);

module.exports = Group;
