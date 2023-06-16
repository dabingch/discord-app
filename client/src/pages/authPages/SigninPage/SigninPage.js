import React, { useState, useEffect } from 'react'
import AuthBox from '../../../components/AuthBox'
import SigninPageHeader from './SigninPageHeader'
import SigninPageFooter from './SigninPageFooter'
import SigninPageInput from './SigninPageInput'
import { validateSigninForm } from '../../../utils/validators'

const SigninPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isFormValid, setIsFormValid] = useState(false)

	useEffect(() => {
		setIsFormValid(validateSigninForm({ email, password }))
	}, [email, password, setIsFormValid])

	const handleSignin = () => {
		console.log('Sign in')
		console.log(email, password)
	}

	return (
		<AuthBox>
			<SigninPageHeader />
			<SigninPageInput
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
			/>
			<SigninPageFooter
				isFormValid={isFormValid}
				handleSignin={handleSignin}
			/>
		</AuthBox>
	)
}

export default SigninPage
