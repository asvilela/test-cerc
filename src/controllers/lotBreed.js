const request = require('request')
const url = 'https://private-anon-daa246247f-cerctestedevapispecs.apiary-mock.com/lotes_de_racas'

class LotBreed {
  create (params) {
    let res = new Promise(function (resolve, reject) {
      request
        .post(url, params, function (error, response, body) {
          if (error) { reject(error) }
          resolve(body)
        })
    })

    return res
  }

  getLot (id) {
    let res = new Promise(function (resolve, reject) {
      request
        .get(`${url}/${id}`, function (error, response, body) {
          if (error) { reject(error) }
          resolve(body)
        })
    })

    return res
  }
}

module.exports = new LotBreed()
