const {
  successRes,
  successResData,
  errorRes,
} = require("../helpers/apiResponses");
const connection = require("../config/db.config");
const { showQuery, dataQuery } = require("../helpers/connectionQueries");

const pug = require('pug');
const path = require('path');
const pdf = require('html-pdf')
const fs = require('fs');

const showProducts = (req, res) => {
  const sql = `select p.id, p.name, p.hsncode, p.description, p.stock, p.is_active, ps.id 'Stock ID', ps.product_stock
    from products p
    left join productstock ps on ps.id = p.id;`;
  // where ps.product_stock > 0;`;
  // showQuery(res, sql, "Product List");
  connection.query(sql, (err, rows) => {
    if (err) return errorRes(res, err);
    // rows.forEach(product => product.image = path.join("file:///", __dirname, "../public/images", "/test.png").replace(/\//g, '\\'))
    rows.forEach(product => product.image = path.join("/images", "/test.png"))
      // console.log(rows);
    pug.renderFile(path.resolve(__dirname + '/../views/productList.pug').replace(/\\/g, '/'), { products: rows }, (err, html) => {
      if (err) {
        console.log(err);
        return errorRes(res, err)
      }
      res.send(html);
    });

    rows.forEach(product => product.image = path.join("file:///", __dirname, "../public/images", "test.png"));
    pug.renderFile(path.resolve(__dirname + "/../views/productList.pug"), { products: rows }, (err, html) => {
      if (err) console.log(err);
      // pdf.create(html, { format: "A4", localUrlAccess: true }).toFile("Product_List.pdf", (err, result) => {
      pdf.create(html, { format: "A4", localUrlAccess: true }).toFile(path.resolve(__dirname, "../uploads/pdfs") + "/" + (new Date().toJSON().slice(0, 10) + " Product_List.pdf"), (err, result) => {
        if (err) return console.log(err);
        console.log(result);
      });
    });
  });
}

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