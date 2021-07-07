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

const showSalesReturn = (req, res) => {
  const sql = `select p.id, p.sales_id, pd.name 'Product Name', s.name 'Customer', p.date, p.qty, p.rate, p.amt
    from salesReturn p
    left join customers s on s.id = p.customer_id
    left join products pd on pd.id = p.product_id;`;
  showQuery(res, sql, "Sales Return Report");
};

const addSalesReturn = (req, res) => {
  var { body } = req;
  var sql = "insert into salesReturn set ?;";
  dataQuery(res, sql, body, "Sales Return Done");
};

const updateSalesReturn = (req, res) => {
  var {
    body,
    params: { id },
  } = req;
  var sql = "update salesReturn set ? where id = ?";
  dataQuery(res, sql, [body, id], "Sales Return Updated");
};

const deleteSalesReturn = (req, res) => {
  noDeleteQuery(res);
};

module.exports = {
  showSalesReturn,
  addSalesReturn,
  updateSalesReturn,
  deleteSalesReturn,
};