const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  districtId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "districts",
    },
  ],
});
const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    regions: [
      {
        type: regionSchema,
        required: true,
      },
    ],
  },
  { toJSON: true, toObject: true }
);

// countrySchema.virtual("districts", {});

const Country = mongoose.model("countries", countrySchema);

module.exports = Country;
