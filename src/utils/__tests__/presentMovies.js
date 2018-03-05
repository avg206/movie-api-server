const { presentMovies } = require('../presenters')

describe('Utilites :: presentMovies', function () {
  let defaultData = []

  beforeEach(() => {
    defaultData = [
      { field1: '1' },
      { field1: '2' },
      { field1: '3' },
    ]
  })

  it('should return function', () => {
    expect(presentMovies).toBeInstanceOf(Function)
  })

  it('should present items correctly', () => {
    const data = presentMovies(defaultData)

    expect(data).toEqual([
      {},
      {},
      {},
    ])
  })
})
