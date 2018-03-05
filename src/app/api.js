const KoaRouter = require('koa-router')

const { presentMovie, presentMovies } = require('../utils/presenters')

const api = KoaRouter()

api.get('/movies',
  // Search
  (ctx, next) => {
    const { search } = ctx.query

    if (search) {
      ctx.state.Movies = ctx.state.Movies.filter((item) => item.title.indexOf(search) !== -1)
    }

    next()
  },
  // Filter
  (ctx, next) => {
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
  },
  // Soring
  (ctx, next) => {
    const { sortBy, sortOrder } = ctx.query

    if (sortBy && sortOrder) {
      ctx.state.Movies = ctx.state.Movies.sort((a, b) => {
        let aField = a[sortBy] || ''
        let bField = b[sortBy] || ''

        if (sortOrder === 'desc') {
          let tmp = aField
          aField = bField
          bField = tmp
        }

        if (typeof aField === 'string') {
          return aField.localeCompare(bField)
        } else if (typeof aField === 'number') {
          return aField - bField
        }
      })
    }

    next()
  },
  // Return movies
  async (ctx, next) => {
    ctx.status = 200
    ctx.body = presentMovies(ctx.state.Movies)
  })

api.get('/movies/:id',
  async (ctx, next) => {
    const id = parseInt(ctx.params.id, 10)

    const movie = ctx.state.Movies.find((x) => x.id === id)

    ctx.status = 200
    ctx.body = presentMovie(movie)
  })

module.exports = exports = api
