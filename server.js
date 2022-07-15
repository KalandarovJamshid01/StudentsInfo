const dotenv = require("dotenv").config();
const db = require("./config/db");

const app = require("./middleware/app");

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
