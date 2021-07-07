const successRes = (res, message) => {
  return res.status(200).json({
    success: true,
    message
  })
}

const successResData = (res, message, data) => {
  return res.status(200).json({
    success: true,
    message,
    data
  })
}

const errorRes = (res, error) => {
  return res.status(200).json({
    success: false,
    error
  })
}

const unauthorizedRes = (res, message) => {
  return res.status(401).json({
    success: false,
    message
  })
}

module.exports = { successRes, successResData, errorRes, unauthorizedRes }