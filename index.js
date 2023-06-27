const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const { read, write } = require('./data')

app.get('/data', (req, res) => {
  res.send(JSON.stringify(read()))
})
app.post("/data", (req, res) => {
    res.send(write(req.body))
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})