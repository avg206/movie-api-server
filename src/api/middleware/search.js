
const search = (ctx, next) => {
  const { search, searchBy } = ctx.query

  if (search && searchBy) {
    switch (searchBy) {
      case 'title':
        ctx.state.Movies = ctx.state.Movies.filter(
          (item) => (new RegExp(search, 'i')).test(item.title)
        )
        break

      case 'genres':
        ctx.state.Movies = ctx.state.Movies.filter(
          (item) => item.genres.some(x => x.includes(search))
        )
        break
    }
  }

  next()
}

module.exports = search
