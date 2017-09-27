const express = require('express')
const App = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Hotels App listening on port 3000')
})