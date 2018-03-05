const API_KEY = process.env.API_KEY

const axios = require('axios')
const fs = require('fs')

const { presentMovie, presentJSONData } = require('./utils/presenters')

const sleep = (ms = 0) => {
  return new Promise(r => setTimeout(r, ms))
}

const getMovieByID = async ({ id }) => {
  console.log(`Download movie ID: ${id} `)
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)

  console.log('Sleep for 100 ms')
  await sleep(100)

  return presentMovie(data)
}

const getMoviesByPage = async (page) => {
  const { data: { results = [] } } = await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${API_KEY}`)
  const movies = []

  for (let i = 0; i < results.length; i++) {
    const data = await getMovieByID(results[i])

    movies.push(data)
  }

  return movies
}

const getMovies = async (pages) => {
  let movies = []

  for (let i = 1; i <= pages; i += 1) {
    const list = await getMoviesByPage(i)

    movies = movies.concat(list)
  }

  fs.writeFileSync(`./data/films.json`, presentJSONData(movies))
}

try {
  getMovies(10)
} catch (e) {
  console.log(e)
}
