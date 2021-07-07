const connection = require("../config/db.config");
const { errorRes, successResData } = require("./apiResponses");

const showQuery = (res, query, message) => {
  connection.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      errorRes(res, err);
    } else {
      successResData(res, message, rows);
    }
  });
};

const dataQuery = (res, query, values, message) => {
  connection.query(query, values, (err, rows) => {
    if (err) {
      console.log(err);
      errorRes(res, err);
    } else {
      successResData(res, message, rows);
    }
  });
};

const noDeleteQuery = (res) => {
  errorRes(res, "Entry cannot be deleted!");
};

module.exports = { showQuery, dataQuery, noDeleteQuery };