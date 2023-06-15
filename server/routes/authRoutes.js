const router = require('express').Router()
const { authControllers } = require('../controllers/auth/authControllers')
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const auth = require('../middleware/auth')

const signupSchema = Joi.object({
	username: Joi.string().min(3).max(12).required(),
	password: Joi.string().min(6).max(12).required(),
	email: Joi.string().email().required(),
})

const signinSchema = Joi.object({
	password: Joi.string().min(6).max(12).required(),
	email: Joi.string().email().required(),
})

router.post('/signup', validator.body(signupSchema), authControllers.postSignup)
router.post('/signin', validator.body(signinSchema), authControllers.postSignin)

module.exports = router
