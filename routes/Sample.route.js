const { sampleFunction } = require("../controllers/Sample.controller");

const router = require("express").Router();

router.get("/", sampleFunction);

module.exports = router;