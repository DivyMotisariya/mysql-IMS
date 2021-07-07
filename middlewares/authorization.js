const connection = require("../config/db.config");
const {
  successResData,
  errorRes,
  unauthorizedRes,
} = require("../helpers/apiResponses");

const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const login = (req, res) => {
  const errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty()) {
    errorRes(res, errors.array());
  } else {
    const { username, password } = req.body;

    const sql = "select * from users where username = ?;";
    connection.query(sql, [username], (err, rows) => {
      if (err) {
        errorRes(res, err);
      } else {
        if (rows.length > 0) {
          if (password === rows[0].password) {
            jwt.sign({ username },
              process.env.JWT_TOKEN_SECRET, {},
              (err, token) => {
                successResData(res, "Logged In Successfully", {
                  username: rows[0].username,
                  token,
                });
              }
            );
          } else {
            errorRes(res, "Invalid Password");
          }
        } else {
          errorRes(res, "Invalid Username");
        }
      }
    });
  }
};

const checkAuthorization = (req, res, next) => {
  var { authorization } = req.headers;
  // var xAuth = req.headers['x-auth-token'];
  // console.log(xAuth);
  if (authorization) {
    var token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err) => {
      if (err) errorRes(res, err);
      else next();
      // else return successResData(res, payload);
    });
  } else {
    unauthorizedRes(res, "Unauthorized Access");
  }
};

module.exports = { login, checkAuthorization };