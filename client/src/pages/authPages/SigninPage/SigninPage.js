import React, { useState } from 'react'
import AuthBox from '../../../components/AuthBox'
import SigninPageHeader from './SigninPageHeader'
import SigninPageInput from './SigninPageInput'

const SigninPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<AuthBox>
			<SigninPageHeader />
			<SigninPageInput
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
			/>
		</AuthBox>
	)
}

export default SigninPage
