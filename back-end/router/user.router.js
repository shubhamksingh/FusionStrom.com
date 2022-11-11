const express = require('express')
const AuthController = require('../controller/user.controller')


const router = express.Router()

//register handler
router.post('/signup', AuthController.register)

router.post('/signin', AuthController.signin)

module.exports = router