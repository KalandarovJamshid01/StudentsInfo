const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  regionId: {
    type: mongoose.Schema.ObjectId,
    ref: "districts",
  },
});

const District = mongoose.model("districts", districtSchema);

module.exports = District;
