const { errorRes, successResData } = require("../helpers/apiResponses");

const validatePurchase = (req, res, next) => {
  const {
    body: { product_id, seller_id, date, qty, rate, amt },
  } = req;
  if (!(product_id && seller_id && qty && rate && amt)) {
    var err = new Error("Enter all fields");
    errorRes(res, err.message);
  } else {
    req.purchase = {
      product_id: Number(product_id),
      seller_id: Number(seller_id),
      date,
      qty: Number(qty),
      rate: Number(rate),
      amt: Number(amt),
    };
    next();
  }
};

const validatePurchaseUpdate = (req, res, next) => {
  const { body } = req;
  if (JSON.stringify(body) == "{}") {
    errorRes(res, "Enter a field to update");
  } else {
    const purchase_id = req.params.id;
    req.purchase_id = purchase_id;
    req.purchase = body;
    next();
  }
};

const validatePurchaseReturn = (req, res, next) => {
  const {
    body: { product_id, purchase_id, seller_id, date, qty, rate, amt },
  } = req;
  if (!(product_id && purchase_id && seller_id && qty && rate && amt)) {
    var err = new Error("Enter all fields");
    errorRes(res, err.message);
  } else {
    req.purchaseReturn = {
      product_id: Number(product_id),
      purchase_id: Number(purchase_id),
      seller_id: Number(seller_id),
      date,
      qty: Number(qty),
      rate: Number(rate),
      amt: Number(amt),
    };
    next();
  }
};

const validatePurchaseReturnUpdate = (req, res, next) => {
  const { body } = req;
  if (JSON.stringify(body) == "{}") {
    errorRes(res, "Enter a field to update");
  } else {
    const purchaseReturn_id = req.params.id;
    req.purchaseReturn_id = purchaseReturn_id;
    req.purchaseReturn = body;
    next();
  }
};

module.exports = {
  validatePurchase,
  validatePurchaseUpdate,
  validatePurchaseReturn,
  validatePurchaseReturnUpdate,
};