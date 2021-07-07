const { successRes, successResData } = require("../helpers/apiResponses")

const sampleFunction = (req, res) => {
  successRes(res, "Sample Controller Function")
}

module.exports = { sampleFunction }