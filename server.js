const dotenv = require("dotenv").config();
const db = require("./config/db");

const app = require("./middleware/app");

app.listen(8000, () => {
  console.log("Port sizni tinglamoqda !");
});
