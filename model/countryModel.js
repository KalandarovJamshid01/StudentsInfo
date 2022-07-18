const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

countrySchema.virtual("regions", {
  ref: "regions",
  localField: "_id",
  foreignField: "countryId",
});

// countrySchema.virtual("districts", {});

const Country = mongoose.model("countries", countrySchema);

module.exports = Country;
