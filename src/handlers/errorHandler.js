'use strict'

let onError = function (message, errors, status, res) {
  res.statusCode = status
  let body = {
    message: message,
    errors: errors
  }

  res.send(body)
}

module.exports = function () {
  return onError
}
