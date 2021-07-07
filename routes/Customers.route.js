const {
  addCustomer,
  showCustomers,
} = require("../controllers/Customers.controller");
const { validationResponse } = require("../helpers/validationResponses");
const { validateCustomer } = require("../middlewares/validation");
const { insertCustomerRules } = require("../validations/customerValidation");

const router = require("express").Router();

// Show all customer details
router.get("/", showCustomers);
// router.post("/", validateCustomer, addCustomer);

// Insert new customer details
router.post("/", insertCustomerRules(), validationResponse, addCustomer);

module.exports = router;