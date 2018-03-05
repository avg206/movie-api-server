const Movies = require('../data/films.json')

const updateContext = (ctx, next) => {
  ctx.state.Movies = Movies
  next()
}

module.exports = {
  updateContext,
}
