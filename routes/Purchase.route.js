const {
  showPurchase,
  addPurchase,
  updatePurchase,
  deletePurchase,
} = require("../controllers/Purchase.controller");
const {
  validationResponse,
  emptyReqBody,
} = require("../helpers/validationResponses");
const { checkAuthorization } = require("../middlewares/authorization");
const {
  validatePurchase,
  validatePurchaseUpdate,
} = require("../middlewares/purchaseValidation");
const { stockValidation } = require("../middlewares/stockValidation");
const {
  purchaseRules,
  purchaseUpdateRules,
} = require("../validations/purchaseValidation");

const router = require("express").Router();

/**
 * Check login using JWT Authorization,
 * using as middleware
 */
router.use(checkAuthorization);

// Display all purchase details
router.get("/", showPurchase);

// router.post("/", stockValidation, validatePurchase, addPurchase);

// Insert new purchase details
router.post("/", purchaseRules(), validationResponse, addPurchase);

// router.put(
//   "/update/:id",
//   stockValidation,
//   validatePurchaseUpdate,
//   updatePurchase
// );

// Update existing purchase details using 'req.params'
router.put(
  "/update/:id",
  emptyReqBody,
  purchaseUpdateRules(),
  validationResponse,
  updatePurchase
);

// Delete purchase record using 'req.params'
router.delete("/delete/:id", deletePurchase);

module.exports = router;