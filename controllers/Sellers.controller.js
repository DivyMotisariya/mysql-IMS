const {
  successRes,
  successResData,
  errorRes,
} = require("../helpers/apiResponses");
const connection = require("../config/db.config");
const { showQuery, dataQuery } = require("../helpers/connectionQueries");

const showSellers = (req, res) => {
  const sql = "select * from sellers;";
  showQuery(res, sql, "Seller List");
};

const addSeller = (req, res) => {
  var { body } = req;
  var sql = "insert into sellers set ?;";
  dataQuery(res, sql, body, "Seller Added");
};

module.exports = { showSellers, addSeller };