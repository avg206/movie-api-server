const pick = require('lodash/pick')

const goodFields = [
  'id',
  'title',
  'tagline',
  'vote_average',
  'vote_count',
  'release_date',
  'poster_path',
  'overview',
  'budget',
  'revenue',
  'genres',
]

const presentMovie = (movie) => {
  return pick(movie, goodFields)
}

const presentMovies = (movies) => {
  return movies.map((item) => presentMovie(item))
}

module.exports = {
  presentMovie,
  presentMovies,
}
