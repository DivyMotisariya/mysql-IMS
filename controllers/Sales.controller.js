const {
  successRes,
  successResData,
  errorRes,
} = require("../helpers/apiResponses");
const connection = require("../config/db.config");
const {
  showQuery,
  dataQuery,
  noDeleteQuery,
} = require("../helpers/connectionQueries");

const showSales = (req, res) => {
  const sql = `select p.id, pd.name 'Product Name', s.name 'Customer', p.date, p.qty, p.rate, p.amt
    from sales p
    left join customers s on s.id = p.customer_id
    left join products pd on pd.id = p.product_id;`;
  showQuery(res, sql, "Sales Report");
};

const addSales = (req, res) => {
  var { body } = req;
  var sql = "insert into sales set ?;";
  dataQuery(res, sql, body, "Saled Done");
};

const updateSales = (req, res) => {
  var {
    body,
    params: { id },
  } = req;
  var sql = "update sales set ? where id = ?";
  dataQuery(res, sql, [body, id], "Sales Updated");
};

const deleteSales = (req, res) => {
  noDeleteQuery(res);
};

module.exports = { showSales, addSales, updateSales, deleteSales };