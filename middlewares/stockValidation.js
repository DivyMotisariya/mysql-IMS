const connection = require("../config/db.config");
const { errorRes } = require("../helpers/apiResponses");

const stockValidation = (req, res, next) => {
  // let {
  //   body: { product_id },
  // } = req;
  // let sql = `select stock from products where id = ?`;
  // connection.query(sql, product_id, (err, rows) => {
  //   if (err) {
  //     console.log(err);
  //     errorRes(res, err);
  //   } else {
  //     let { stock } = rows[0];
  //     if (Number(stock) <= 0) {
  //       errorRes(res, "Insufficient Stock");
  //     } else {
  //       next();
  //     }
  //   }
  // });
  next();
};

module.exports = { stockValidation };