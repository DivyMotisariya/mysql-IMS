const { body } = require("express-validator");

const purchaseReturnRules = () => {
  return [
    body("product_id")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Product ID is required")
    .bail()
    .isNumeric()
    .withMessage("Product ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Product ID cannot be negative"),

    body("seller_id")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Seller ID is required")
    .bail()
    .isNumeric()
    .withMessage("Seller ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Seller ID cannot be negative"),

    body("purchase_id")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Purchase ID is required")
    .bail()
    .isNumeric()
    .withMessage("Purchase ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Purchase ID cannot be negative"),

    body("date")
    .optional()
    .isDate({ format: "DD/MM/YYYY" })
    .withMessage("Date should be in 'DD/MM/YYYY' format"),

    body("qty")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Qty is required")
    .bail()
    .isNumeric()
    .withMessage("Qty should be a number")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("Qty should be greater than 0"),

    body("rate")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Rate is required")
    .bail()
    .isNumeric()
    .withMessage("Rate should be a number")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("Rate should be greater than 0"),

    body("amt")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Amt is required")
    .bail()
    .isNumeric()
    .withMessage("Amt should be a number")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("Amt should be greater than 0")
    .bail()
    .custom((value, { req }) => {
      if (Number(value) == Number(req.body.rate) * Number(req.body.qty)) {
        return true;
      } else {
        throw new Error("Amt is not proper");
      }
    }),
  ];
};

const purchaseReturnUpdateRules = () => {
  return [
    body("product_id")
    .optional()
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Product ID is empty")
    .bail()
    .isNumeric()
    .withMessage("Product ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Product ID cannot be negative"),

    body("seller_id")
    .optional()
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Seller ID is empty")
    .bail()
    .isNumeric()
    .withMessage("Seller ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Seller ID cannot be negative"),

    body("purchase_id")
    .optional()
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Purchase ID is empty")
    .bail()
    .isNumeric()
    .withMessage("Purchase ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Purchase ID cannot be negative"),

    body("date")
    .optional()
    .isDate({ format: "DD/MM/YYYY" })
    .withMessage("Date should be in 'DD/MM/YYYY' format"),

    body("qty")
    .optional()
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Qty is empty")
    .bail()
    .isNumeric()
    .withMessage("Qty should be a number")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("Qty should be greater than 0"),

    body("rate")
    .optional()
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Rate is empty")
    .bail()
    .isNumeric()
    .withMessage("Rate should be a number")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("Rate should be greater than 0"),

    body("amt")
    .optional()
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Amt is empty")
    .bail()
    .isNumeric()
    .withMessage("Amt should be a number")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("Amt should be greater than 0")
    .bail(),
  ];
};

module.exports = { purchaseReturnRules, purchaseReturnUpdateRules };