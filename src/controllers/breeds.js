const request = require('request')
const sourceA = 'https://private-anon-daa246247f-cerctestedevapispecs.apiary-mock.com/racas'
const sourceB = 'https://private-anon-e44a738070-cerctestedevfontes.apiary-mock.com/dogs'

class Breed {
  getBreed (identifier) {
    let res = new Promise(function (resolve, reject) {
      request
        .get(`${sourceA}/${identifier}`, function (error, response, body) {
          if (error) {
            request
              .get(`${sourceB}/${identifier}`, function (error, response, body) {
                if (error) { reject(error) }
                resolve(body)
              })
          }
          resolve(body)
        })
    })

    return res
  }
}

module.exports = new Breed()
