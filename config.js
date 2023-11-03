var mysql = require("mysql");
require("dotenv").config();

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.defaultdb ,
});

con.connect((err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("connected");
  }
});

module.exports = con;
