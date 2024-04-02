const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const db = require("./db.config");

//create table if not exists
db.sequelize.sync();

const controller = require("./customer.controller");

app.get("/", (req, res) => {
  res.send("hello world!");
});

//create a new customer
app.post("/customer/new", (req, res) => {
  controller.createCustomer(req, res);
});

//fetch all customers
app.get("/customers", (req, res) => {
  controller.findAllCustomers(req, res);
});

//retrieve a single customer by id
app.get("/customers/:email", (req, res) => {
  controller.findCustomerByEmail(req, res);
});

//update customer
app.put("/customers/update", (req, res) => {
  controller.updateCustomer(req, res);
});

//delete Customer
app.delete("/customers/delete/:email", (req, res) => {
  controller.deleteCustomer(req, res);
});

app.listen(3000, () => {
  console.log(`Server is running on Port 3000`);
});
