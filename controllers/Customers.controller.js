const {
  successRes,
  successResData,
  errorRes,
} = require("../helpers/apiResponses");
const connection = require("../config/db.config");
const { showQuery, dataQuery } = require("../helpers/connectionQueries");

const showCustomers = (req, res) => {
  const sql = `select * from customers;`;
  showQuery(res, sql, "Customer List");
};

const addCustomer = (req, res) => {
  var { body } = req;
  var sql = "insert into customers set ?;";
  dataQuery(res, sql, body, "Customer Added");
};

module.exports = { showCustomers, addCustomer };