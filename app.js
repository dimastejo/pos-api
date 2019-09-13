'use strict'

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const db = require('./db')
const base_path = '/api/v1'
const bodyParser = require('body-parser')

const menuController = require('./controller/menu.controller')
const orderController = require('./controller/order.controller')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/v1/menu',menuController.getMenu)
app.post(base_path + '/order/save', orderController.save)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})