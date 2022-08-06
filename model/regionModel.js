const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  countryId: {
    type: mongoose.Schema.ObjectId,
    ref: "countries",
  },
});

const Region = mongoose.model("regions", regionSchema);

module.exports = Region;
