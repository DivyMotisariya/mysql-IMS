const { body, check } = require("express-validator");

const insertRules = () => {
  return [
    body("name")
    // .custom((value) => {
    //   if (value === undefined) {
    //     throw new Error("Product Name is required!");
    //   } else {
    //     return true;
    //   }
    // })
    .trim()
    .isLength({ min: 1 })
    .withMessage("Enter Product Name"),

    body("hsncode").trim().isLength({ min: 1 }).withMessage("Enter HSN-Code"),

    body("stock")
    .optional()
    .trim()
    .isNumeric()
    .withMessage("Stock must be a number"),
  ];
};

const updateRules = () => {
  return [
    body("name")
    .optional()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Enter Product Name"),

    body("hsncode")
    .optional()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Enter HSN-Code"),

    body("stock")
    .optional()
    .trim()
    .isNumeric()
    .withMessage("Stock must be a number"),
  ];
};

module.exports = { insertRules, updateRules };