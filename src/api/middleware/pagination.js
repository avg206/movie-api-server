
const pagination = (ctx, next) => {
  const { offset = 0, limit = 10 } = ctx.query

  const from = parseInt(offset, 10)
  const to = parseInt(offset, 10) + parseInt(limit, 10)

  console.log(from, to)

  ctx.state.Movies = ctx.state.Movies.slice(from, to)

  next()
}

module.exports = pagination
