const {
  successRes,
  successResData,
  errorRes,
} = require("../helpers/apiResponses");
const connection = require("../config/db.config");
const { showQuery, dataQuery } = require("../helpers/connectionQueries");

const showProducts = (req, res) => {
  const sql = `select p.id, p.name, p.hsncode, p.description, p.stock, p.is_active, ps.id 'Stock ID', ps.product_stock
    from products p
    left join productstock ps on ps.id = p.id;`;
  // where ps.product_stock > 0;`;
  showQuery(res, sql, "Product List");
};

const addProduct = (req, res) => {
  var { body } = req;
  var sql = "insert into products set ?;";
  dataQuery(res, sql, body, "Product Added");
};

const updateProduct = (req, res) => {
  var {
    body,
    params: { id },
  } = req;
  var sql = "update products set ? where id = ?;";
  dataQuery(res, sql, [body, id], "Product Updated");
};

module.exports = { showProducts, addProduct, updateProduct };