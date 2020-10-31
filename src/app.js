const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
var bodyParser = require('body-parser')
const dbConnection = require('./utilities/dbConecction').conect(process.env.MONGO_ROUTE)
const router = require('./routes/indexRoutes.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
})