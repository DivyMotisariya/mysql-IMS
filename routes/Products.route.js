const {
  showProducts,
  addProduct,
  updateProduct,
} = require("../controllers/Products.controller");
const { checkAuthorization } = require("../middlewares/authorization");
const {
  validateProduct,
  validateProductUpdate,
} = require("../middlewares/validation");
const {
  insertRules,
  updateRules,
} = require("../validations/productsValidation");
const {
  emptyReqBody,
  validationResponse,
} = require("../helpers/validationResponses");

const router = require("express").Router();

// Display all products
router.get("/", showProducts);

// router.post("/", rules, validator, validateProduct, addProduct);
// router.put(
//   "/update/:id",
//   checkAuthorization,
//   name,
//   hsncode,
//   stock,
//   validateProductUpdate,
//   updateProduct
// );

// Add new product
router.post("/", insertRules(), validationResponse, addProduct);

// Update existing product
router.put(
  "/update/:id",
  checkAuthorization,
  emptyReqBody,
  updateRules(),
  validationResponse,
  updateProduct
);

module.exports = router;