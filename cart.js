const express = require("express");
const con = require("./config");
require("dotenv").config();
const session = require("express-session");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "anand", resave: false, saveUninitialized: true }));

app.get("/cart", (req, res) => {
  const sql = `select orders.order_id,orders.scheduled_time,orders.products,transactions.order_time,transactions.status,
SUM(od.price) AS total_price FROM orders o JOIN transactions t ON orders.order_id = transactions.order_id 
JOIN order_details od ON orders.order_id = od.order_id WHERE orders.user_id = (?) GROUP BY orders.order_id,
 orders.scheduled_time,orders.products, transactions.order_time, transactions.status`;

  con.query(sql, [email], (err, result) => {
    if (err) {
      console.error("Error executing the query: " + err.message);
      res.status(500).send("An error occurred.");
    } else {
      res.render("index", { data: result });
    }
  });
});
