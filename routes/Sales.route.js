const {
  showSales,
  addSales,
  updateSales,
  deleteSales,
} = require("../controllers/Sales.controller");
const {
  validationResponse,
  emptyReqBody,
} = require("../helpers/validationResponses");
const { checkAuthorization } = require("../middlewares/authorization");
const {
  validateSales,
  validateSalesUpdate,
} = require("../middlewares/salesValidation");
const { stockValidation } = require("../middlewares/stockValidation");
const {
  salesRules,
  salesUpdateRules,
} = require("../validations/salesValidation");

const router = require("express").Router();

// router.use(checkAuthorization);
// router.get("/", showSales);
// router.post("/", stockValidation, validateSales, addSales);
// router.put("/update/:id", stockValidation, validateSalesUpdate, updateSales);
// router.delete("/delete/:id", deleteSales);

// JWT Authorization
router.use(checkAuthorization);

// Display all sales details
router.get("/", showSales);

// Insert new sales details
router.post("/", salesRules(), validationResponse, addSales);

// Update existing sales details
router.put(
  "/update/:id",
  emptyReqBody,
  salesUpdateRules(),
  validationResponse,
  updateSales
);

// Delete existing sales details
router.delete("/delete/:id", deleteSales);

module.exports = router;