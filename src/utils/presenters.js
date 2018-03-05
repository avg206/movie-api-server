const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const addImageHostname = (uri) => {
  return `${IMAGE_URL}${uri}`
}

// Present data to readable JSON
exports.presentJSONData = (data) => {
  return JSON.stringify(data, null, 2)
}

// Present Movie data structure
exports.presentMovie = (data) => {
  return {
    ...data,
    backdrop_path: data.backdrop_path && addImageHostname(data.backdrop_path),
    poster_path: data.poster_path && addImageHostname(data.poster_path),
    belongs_to_collection: data.belongs_to_collection && {
      ...data.belongs_to_collection,
      backdrop_path: data.belongs_to_collection.backdrop_path && addImageHostname(data.belongs_to_collection.backdrop_path),
      poster_path: data.belongs_to_collection.poster_path && addImageHostname(data.belongs_to_collection.poster_path),
    },
    genres: data.genres && data.genres.map(x => x.name),
  }
}
