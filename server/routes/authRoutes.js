const router = require('express').Router()
const { authControllers } = require('../controllers/auth/authControllers')

router.post('/signup', authControllers.postSignup)

router.post('/signin', authControllers.postSignin)

module.exports = router
