'use strict'

let onSuccess = function (data, status, res) {
  res.statusCode = status
  res.send(JSON.parse(data))
}

module.exports = function () {
  return onSuccess
}
