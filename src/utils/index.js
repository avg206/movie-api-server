const Movies = require('../data/films.json')

const updateContext = (ctx, next) => {
  ctx.state.Movies = Movies
  next()
}

const parseQuery = (ctx, next) => {
  ctx.query.offset = (ctx.query.offset && parseInt(ctx.query.offset, 10)) || 0
  ctx.query.limit = (ctx.query.limit && parseInt(ctx.query.limit, 10)) || 10

  next()
}

module.exports = {
  parseQuery,
  updateContext,
}
