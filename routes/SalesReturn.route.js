const {
  showSalesReturn,
  addSalesReturn,
  updateSalesReturn,
  deleteSalesReturn,
} = require("../controllers/SalesReturn.controller");
const {
  validationResponse,
  emptyReqBody,
} = require("../helpers/validationResponses");
const { checkAuthorization } = require("../middlewares/authorization");
const {
  validateSalesReturn,
  validateSalesReturnUpdate,
} = require("../middlewares/salesValidation");
const { stockValidation } = require("../middlewares/stockValidation");
const { salesReturnRules } = require("../validations/salesReturnValidation");

const router = require("express").Router();

// router.use(checkAuthorization);
// router.get("/", showSalesReturn);
// router.post("/", stockValidation, validateSalesReturn, addSalesReturn);
// router.put(
//   "/update/:id",
//   stockValidation,
//   validateSalesReturnUpdate,
//   updateSalesReturn
// );
// router.delete("/delete/:id", deleteSalesReturn);

router.use(checkAuthorization);
router.get("/", showSalesReturn);
router.post("/", salesReturnRules(), validationResponse, addSalesReturn);
router.put(
  "/update/:id",
  emptyReqBody,
  salesReturnRules(),
  validationResponse,
  updateSalesReturn
);
router.delete("/delete/:id", deleteSalesReturn);

module.exports = router;