
const filter = (ctx, next) => {
  const { filter } = ctx.query

  if (filter && filter.length) {
    const filterLength = filter.length
    const filterMap = filter.reduce((prev, curr) => Object.assign(prev, { [curr]: true }), {})

    ctx.state.Movies = ctx.state.Movies.filter((item) => {
      let count = 0;

      (item.genres || []).forEach(
        (x) => count += (filterMap[x] ? 1 : 0)
      )

      return count >= filterLength
    })
  }

  next()
}

module.exports = filter
