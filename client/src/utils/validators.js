export const validateSigninForm = ({ email, password }) => {
	const isEmailValid = validateEmail(email)
	const isPasswordValid = validatePassword(password)

	return isEmailValid && isPasswordValid
}

const validatePassword = (password) => {
	return password.length > 6 && password.length < 12
}

const validateEmail = (email) => {
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	return emailPattern.test(email)
}
