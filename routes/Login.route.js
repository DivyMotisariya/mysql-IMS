const { validationResponse } = require("../helpers/validationResponses");
const { login } = require("../middlewares/authorization");
const { loginRules } = require("../validations/loginValidation");

const router = require("express").Router();

router.post("/", loginRules(), validationResponse, login);

module.exports = router;