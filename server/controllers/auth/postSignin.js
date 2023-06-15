const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const postSignin = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await User.findOne({ email: email.toLowerCase() })

		// Check if the user exists
		if (!user) {
			return res.status(400).send('User does not exist')
		}

		const isValidPassword = await bcrypt.compare(password, user.password)
		if (!isValidPassword) {
			return res.status(400).send('Invalid credentials')
		}

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

		res.status(200).json({
			userDetails: {
				username: user.username,
				email,
				token,
			},
		})
	} catch (error) {
		console.log(error)
		return res.status(500).send('Error occurred, please try again')
	}
}

module.exports = postSignin
