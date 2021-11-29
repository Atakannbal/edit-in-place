const express = require('express')
const path = require('path')
const app = express()
const port = 3000
express.static.mime.define({'application/javascript': ['js']});

app.use(express.static(__dirname + '/src'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => {
  console.log(`EditInPlaceApp is listening at http://localhost:${port}`)
})

