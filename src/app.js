const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('kcors')

const { updateContext } = require('./utils')
const api = require('./api')

const app = new Koa()
  .use(cors())
  .use(updateContext)
  .use(bodyParser())
  .use(api.routes())
  .use(api.allowedMethods())

module.exports = exports = app
