const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// logging middleware
app.use((req, res, next) => {
  console.log(`request received: ${Date.now()}`)
  next()
})

app.post('/sendMessage', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

app.post('/createUser', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

app.get('/hello', (req, res) => {
  res.send('hello')
})

app.listen(3000)