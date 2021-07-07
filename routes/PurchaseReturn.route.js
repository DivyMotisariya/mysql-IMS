const {
  showPurchaseReturn,
  addPurchaseReturn,
  updatePurchaseReturn,
  deletePurchaseReturn,
} = require("../controllers/PurchaseReturn.controller");
const {
  validationResponse,
  emptyReqBody,
} = require("../helpers/validationResponses");
const { checkAuthorization } = require("../middlewares/authorization");
const {
  validatePurchaseReturn,
  validatePurchaseReturnUpdate,
} = require("../middlewares/purchaseValidation");
const { stockValidation } = require("../middlewares/stockValidation");
const {
  purchaseReturnRules,
  purchaseReturnUpdateRules,
} = require("../validations/purchaseReturnValidation");

const router = require("express").Router();

/**
 * Check login using JWT Authorization,
 * using as middleware
 */
router.use(checkAuthorization);

// Show all purchase return details
router.get("/", showPurchaseReturn);

// router.post("/", stockValidation, validatePurchaseReturn, addPurchaseReturn);

// Insert new purchase return details
router.post("/", purchaseReturnRules, validationResponse, addPurchaseReturn);

// router.put(
//   "/update/:id",
//   stockValidation,
//   validatePurchaseReturnUpdate,
//   updatePurchaseReturn
// );

// Update purchase return details using 'req.params'
router.put(
  "/update/:id",
  emptyReqBody,
  purchaseReturnUpdateRules,
  validationResponse,
  updatePurchaseReturn
);

// Delete purchase return details using 'req.params'
router.delete("/delete/:id", deletePurchaseReturn);

module.exports = router;