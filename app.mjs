import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('dsadfasdfasd Barry says hello from: <a href="https://github.com/barrycumbie/literate-fortnight-yar" target="blank">literate fortnight yar</a> & i am ci/cd')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
