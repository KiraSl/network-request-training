const express = require('express')
const json = require('./package.json')
const app = express()
const port = 3000

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/App/index.html`)
})

app.get('/xml', (req, res) => {
  res.sendFile(`${__dirname}/example.xml`)
})

app.get('/json', (req, res) => {
  console.log('params',req.query)
  if (req.query.fail === 'true') {
    res.status(500).send('Error')
  } else {
    res.json(json)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
