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

const showPurchase = (req, res) => {
  const sql = `select 
    p.id, pd.name 'Product Name', s.name 'Seller', p.date, p.qty, p.rate, p.amt
    from purchase p
    left join sellers s on s.id = p.seller_id
    left join products pd on pd.id = p.product_id;`;
  showQuery(res, sql, "Purchase Report");
};

const addPurchase = (req, res) => {
  var { body } = req;
  var sql = "insert into purchase set ?;";
  dataQuery(res, sql, body, "Purchase Done");
};

const updatePurchase = (req, res) => {
  // var { purchase, purchase_id } = req;
  var {
    body,
    params: { id },
  } = req;
  var sql = "update purchase set ? where id = ?";
  dataQuery(res, sql, [body, id], "Purchase Updated");
};

const deletePurchase = (req, res) => {
  noDeleteQuery(res);
};

module.exports = { showPurchase, addPurchase, updatePurchase, deletePurchase };