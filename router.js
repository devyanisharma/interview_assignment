
const express = require('express')
const router = express.Router();
const controller = require('./controller')
const validateMiddleware = require('./validate')

router.get('/user',controller.getUser)
router.post('/createUser',validateMiddleware.validate,controller.postUser)

module.exports = router