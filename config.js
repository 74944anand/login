var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anandr@7020",
  database: "movies",
});

con.connect((err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("connected");
  }
});

module.exports = con;
