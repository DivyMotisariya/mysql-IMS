const { body } = require("express-validator");

const loginRules = () => {
  return [
    body("username")
    .trim()
    .isLength({ min: 4 })
    .withMessage("Username should be atleast 4 characters long"),

    body("password")
    .trim()
    .matches(/[a-zA-z]*[0-9]+/)
    .withMessage("Password must contain atleast 1 number")
    .isLength({ min: 8 })
    .withMessage("Password must be >= 8 characters"),
  ];
};

module.exports = { loginRules };