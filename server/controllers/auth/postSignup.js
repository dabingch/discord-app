const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const postSignup = async (req, res) => {
	try {
		const { username, email, password } = req.body
		const existingUser = await User.findOne({ email: email.toLowerCase() })

		// Check if the user exists
		if (existingUser) {
			return res.status(400).send('User already exists')
		}

		// Hash the password
		const salt = await bcrypt.genSalt(10)
		const encryptedPassword = await bcrypt.hash(password, salt)

		// Create a user and save it in the database
		const user = await User.create({
			username,
			email: email.toLowerCase(),
			password: encryptedPassword,
		})

		// Create JWT token
		const token = jwt.sign(
			{
				userId: user._id,
				email,
			},
			process.env.TOKEN_KEY,
			{
				expiresIn: '24h',
			}
		)

		res.status(201).json({
			userDetails: {
				username,
				email,
				token,
			},
		})
	} catch (error) {
		console.log(error)
		return res.status(500).send('Error occurred, please try again')
	}
}

module.exports = postSignup
