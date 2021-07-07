const { errorRes } = require("../helpers/apiResponses");

const validateSales = (req, res, next) => {
  const {
    body: { product_id, customer_id, date, qty, rate, amt },
  } = req;
  if (!(product_id && customer_id && qty && rate && amt)) {
    var err = new Error("Enter all fields");
    errorRes(res, err.message);
  } else {
    req.sales = {
      product_id: Number(product_id),
      customer_id: Number(customer_id),
      date,
      qty: Number(qty),
      rate: Number(rate),
      amt: Number(amt),
    };
    next();
  }
};

const validateSalesUpdate = (req, res, next) => {
  const { body } = req;
  if (JSON.stringify(body) == "{}") {
    errorRes(res, "Enter a field to update");
  } else {
    const sales_id = req.params.id;
    req.sales_id = sales_id;
    req.sales = body;
    next();
  }
};

const validateSalesReturn = (req, res, next) => {
  const {
    body: { product_id, sales_id, customer_id, date, qty, rate, amt },
  } = req;
  if (!(product_id && sales_id && customer_id && qty && rate && amt)) {
    var err = new Error("Enter all fields");
    errorRes(res, err.message);
  } else {
    req.salesReturn = {
      product_id: Number(product_id),
      customer_id: Number(customer_id),
      sales_id: Number(sales_id),
      date,
      qty: Number(qty),
      rate: Number(rate),
      amt: Number(amt),
    };
    next();
  }
};

const validateSalesReturnUpdate = (req, res, next) => {
  const { body } = req;
  if (JSON.stringify(body) == "{}") {
    errorRes(res, "Enter a field to update");
  } else {
    const salesReturn_id = req.params.id;
    req.salesReturn_id = salesReturn_id;
    req.salesReturn = body;
    next();
  }
};

module.exports = {
  validateSales,
  validateSalesUpdate,
  validateSalesReturn,
  validateSalesReturnUpdate,
};