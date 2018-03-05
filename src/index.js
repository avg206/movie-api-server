const port = process.env.PORT || 4000
const env = process.env.NODE_ENV || 'development'
const src = './app'

const app = require(src)
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
