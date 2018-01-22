const HTTPStatus = require('http-status')

module.exports = function (app) {
  app.get('/api/breeds', function (req, res, next) {
    res.send('Not implemented')
  })

  app.get('/api/breeds/:identifier', async function (req, res, next) {
    let { identifier } = req.params
    try {
      let data = await app.src.controllers.breeds.getBreed(identifier)
      app.src.handlers.successHandler(data, HTTPStatus.OK, res)
    } catch (error) {
      app.src.handlers.errorHandler('Erro ao consultar raça', error.toString(), HTTPStatus.BAD_REQUEST, res)
    }
  })
}
