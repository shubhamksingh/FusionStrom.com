const express = require('express')
const AuthController = require('../controller/user.controller')


const router = new express.Router()

//register handler
router.post('/signup', AuthController.register)

router.post('/signin', AuthController.login)

module.exports = router