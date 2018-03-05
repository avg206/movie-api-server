const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('kcors')

const Movies = require('../data/films.json')
const api = require('../api')

const app = new Koa()
  .use(cors())
  .use(async (ctx, next) => {
    ctx.state.Movies = Movies
    await next()
  })
  .use(bodyParser())
  .use(api.routes())
  .use(api.allowedMethods())

module.exports = exports = app
