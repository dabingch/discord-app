import React, { useState } from 'react'
import AuthBox from '../../../components/AuthBox'
import SigninPageHeader from './SigninPageHeader'
import SigninPageFooter from './SigninPageFooter'
import SigninPageInput from './SigninPageInput'

const SigninPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isFormValid, setIsFormValid] = useState(false)

	const handleSignin = () => {
		console.log('Sign in')
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
