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

const showPurchaseReturn = (req, res) => {
  const sql = `select p.id, p.purchase_id, pd.name 'Product Name', s.name 'Seller', p.date, p.qty, p.rate, p.amt
    from purchaseReturn p
    left join sellers s on s.id = p.seller_id
    left join products pd on pd.id = p.product_id;`;
  showQuery(res, sql, "Purchase Return Report");
};

const addPurchaseReturn = (req, res) => {
  var { body } = req;
  var sql = "insert into purchaseReturn set ?;";
  dataQuery(res, sql, body, "Purchase Return Done");
};

const updatePurchaseReturn = (req, res) => {
  var {
    body,
    params: { id },
  } = req;
  var sql = "update purchaseReturn set ? where id = ?";
  dataQuery(res, sql, [body, id], "Purchase Return Updated");
};

const deletePurchaseReturn = (req, res) => {
  noDeleteQuery(res);
};

module.exports = {
  showPurchaseReturn,
  addPurchaseReturn,
  updatePurchaseReturn,
  deletePurchaseReturn,
};