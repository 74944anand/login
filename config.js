var mysql = require("mysql");
require("dotenv").config();

var con = mysql.createConnection({
  host: "localhost",
  user: "id21500438_anand",
  password: "Anandr@7020",
  database: "id21498705_test",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

module.exports = con;
