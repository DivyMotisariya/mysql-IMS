const { showSellers, addSeller } = require("../controllers/Sellers.controller");
const { validationResponse } = require("../helpers/validationResponses");
const { validateSeller } = require("../middlewares/validation");
const { insertSellerRules } = require("../validations/sellerValidation");

const router = require("express").Router();

// Display all seller details
router.get("/", showSellers);
// router.post("/", validateSeller, addSeller);

// Insert new seller details
router.post("/", insertSellerRules(), validationResponse, addSeller);

module.exports = router;