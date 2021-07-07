const router = require("express").Router();
const loginRoute = require("../routes/Login.route");
const customerRoute = require("../routes/Customers.route");
const sellerRoute = require("../routes/Sellers.route");
const productRoute = require("../routes/Products.route");

const purchaseRoute = require("../routes/Purchase.route");
const purchaseReturnRoute = require("../routes/PurchaseReturn.route");
const salesRoute = require("../routes/Sales.route");
const salesReturnRoute = require("../routes/SalesReturn.route");

// login Route
router.use("/login", loginRoute);
// Customer Route
router.use("/customer", customerRoute);
// Seller Route
router.use("/seller", sellerRoute);
// Product Route
router.use("/product", productRoute);

// Purchase Route
router.use("/purchase", purchaseRoute);
// Purchase Return Route
router.use("/purchaseReturn", purchaseReturnRoute);
// Sales Route
router.use("/sales", salesRoute);
// Sales Return Route
router.use("/salesReturn", salesReturnRoute);

module.exports = router;