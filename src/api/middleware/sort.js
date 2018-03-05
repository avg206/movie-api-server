
const sort = (ctx, next) => {
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
}

module.exports = sort
