const authcontrollers = require('../Controllers/auth.controller.js')
const express = require('express')
const router = express.Router()
const userVaildate = require('../Validatetors/validate.user.js')
const Validate= require('../Middlewares/validate.middleware.js')
const loginValidate = require('../Validatetors/login.validate.js')

router.post('/register',Validate(userVaildate),authcontrollers.register)
router.post('/login',Validate(loginValidate),authcontrollers.login)

module.exports = router