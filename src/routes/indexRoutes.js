const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

router.get('/', (req, res, next) => res.send({"response": "server works"}))
router.post('/login', userController.login)
router.post('/registry', userController.saveUser)
router.post('/checkEmail', userController.checkEmail)
router.post('/checkValidationCode', userController.checkValidationCode)
router.post('/changePassword', userController.changePassword)

module.exports = router