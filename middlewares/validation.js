const { validationResult } = require("express-validator");
const { errorRes } = require("../helpers/apiResponses");

const validateProduct = (req, res, next) => {
  req.product = req.body;
  next();
};

const validateProductUpdate = (req, res, next) => {
  req.product = req.body;
  req.product_id = req.params.id;
  next();
};

const validateCustomer = (req, res, next) => {
  req.customer = req.body;
  next();
};

const validateSeller = (req, res, next) => {
  req.seller = req.body;
  next();
};

module.exports = {
  validateProduct,
  validateProductUpdate,
  validateCustomer,
  validateSeller,
};