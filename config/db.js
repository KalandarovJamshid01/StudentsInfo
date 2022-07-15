const mongoose = require("mongoose");

const mongo = mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongo;
