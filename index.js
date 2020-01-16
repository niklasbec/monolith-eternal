require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const port = process.env.PORT || 4000

const app = express()

app.use(express.static('client/build'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/api/greeting', (req, res) => {
  res.json(`Hello, ${req.query.name}! How are you?`)
})

app.use((req, res) => {
  res.json('This API is alive!')
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
})