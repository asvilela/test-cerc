const app = require('./app')
const bodyParser = require('body-parser')
const consign = require('consign')

app.use(bodyParser.json())

consign()
  .include('./src/routes')
  .then('./src/controllers')
  .then('./src/handlers')
  .into(app)

app.listen(3000)
