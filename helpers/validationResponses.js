const { validationResult } = require("express-validator");
const { errorRes } = require("./apiResponses");

const validationResponse = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    const es = [];
    errors.array().map((err) =>
      es.push({
        [err.param]: err.msg,
      })
    );
    errorRes(res, es);
  }
};

const emptyReqBody = (req, res, next) => {
  if (JSON.stringify(req.body) === "{}") {
    errorRes(res, "Empty Request");
  } else {
    next();
  }
};

module.exports = { validationResponse, emptyReqBody };