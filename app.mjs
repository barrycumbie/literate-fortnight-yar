import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Barry says hello from: <a href="https://github.com/barrycumbie/literate-fortnight-yar/tree/dev" target="blank">literate fortnight yar | dev</a>')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
