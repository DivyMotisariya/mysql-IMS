const { body } = require("express-validator");

const insertCustomerRules = () => {
  return [
    body("name").trim().isLength({ min: 1 }).withMessage("Enter Customer Name"),
    body("contact_no")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Enter Contact Number")
    .isMobilePhone("en-IN")
    .withMessage("Enter contact number in correct format"),
    body("address")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Address is required"),
  ];
};

module.exports = { insertCustomerRules };