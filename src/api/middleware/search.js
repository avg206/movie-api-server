
const search = (ctx, next) => {
  const { search } = ctx.query

  if (search) {
    ctx.state.Movies = ctx.state.Movies.filter((item) => item.title.indexOf(search) !== -1)
  }

  next()
}

module.exports = search
