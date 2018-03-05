const search = require('../search')

describe('Middleware :: Search', () => {
  let defaultCtx = {}

  beforeEach(() => {
    defaultCtx = {
      query: {},
      state: {
        Movies: [
          { title: '12345' },
          { title: '123ooo123' },
        ],
      },
    }
  })

  it('should return function', () => {
    expect(search).toBeInstanceOf(Function)
  })

  it('should call `next` callback', () => {
    const next = jest.fn()

    search(defaultCtx, next)

    expect(next).toHaveBeenCalledTimes(1)
  })

  it('should search to specific item', () => {
    const next = jest.fn()
    defaultCtx.query.search = 'ooo'

    search(defaultCtx, next)

    expect(defaultCtx.state.Movies).toEqual([
      { title: '123ooo123' },
    ])
  })
})
