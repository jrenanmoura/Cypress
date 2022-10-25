const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json(:'Hello Renan')
})

app.listen(3000)