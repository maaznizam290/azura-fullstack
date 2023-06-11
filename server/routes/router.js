const express = require('express')
const token = require('./token')
const router = express.Router()


router.post('/token', token.get)

module.exports = router