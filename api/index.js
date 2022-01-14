const router = require('./router')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(router);

module.exports = app
