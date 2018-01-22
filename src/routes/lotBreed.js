const HTTPStatus = require('http-status')

module.exports = function (app) {
  app.get('/api/lot-breed', function (req, res, next) {
    res.send('Not implemented')
  })

  app.get('/api/lot-breed/:id', async function (req, res, next) {
    let { id } = req.params
    try {
      let data = await app.src.controllers.lotBreed.getLot(id)
      app.src.handlers.successHandler(data, HTTPStatus.OK, res)
    } catch (e) {
      app.src.handlers.errorHandler('Erro ao consultar lote de processamento', e.toString(), HTTPStatus.BAD_REQUEST, res)
    }
  })

  app.post('/api/lot-breed', async function (req, res, next) {
    try {
      let data = await app.src.controllers.lotBreed.create(res.body)
      app.src.handlers.successHandler(data, HTTPStatus.CREATED, res)
    } catch (e) {
      app.src.handlers.errorHandler('Erro ao enviar lote de processamento', e.toString(), HTTPStatus.BAD_REQUEST, res)
    }
  })
}
