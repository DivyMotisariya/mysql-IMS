const { body } = require("express-validator");

const salesReturnRules = () => {
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

    body("customer_id")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Customer ID is required")
    .bail()
    .isNumeric()
    .withMessage("Customer ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Customer ID cannot be negative"),

    body("sales_id")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Sales ID is required")
    .bail()
    .isNumeric()
    .withMessage("Sales ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Sales ID cannot be negative"),

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

const salesReturnUpdateRules = () => {
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

    body("customer_id")
    .optional()
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Customer ID is empty")
    .bail()
    .isNumeric()
    .withMessage("Customer ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Customer ID cannot be negative"),

    body("sales_id")
    .optional()
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Sales ID is empty")
    .bail()
    .isNumeric()
    .withMessage("Sales ID should be a number")
    .bail()
    .isInt({ gt: 0 })
    .withMessage("Sales ID cannot be negative"),

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

module.exports = { salesReturnRules, salesReturnUpdateRules };