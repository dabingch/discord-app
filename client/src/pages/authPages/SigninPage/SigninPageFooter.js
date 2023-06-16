import React from 'react'
import PrimaryButton from '../../../components/PrimaryButton'
import RedirectInfo from '../../../components/RedirectInfo'
import { useNavigate } from 'react-router-dom'

const SigninPageFooter = ({ handleSignin, isFormValid }) => {
	const navigate = useNavigate()

	const handlePushToSignupPage = () => {
		navigate('/signup')
	}

	return (
		<>
			<div>
				<PrimaryButton
					label='Sign in'
					onClick={handleSignin}
					disabled={!isFormValid}
					additionalStyles={{ marginTop: '30px' }}
				/>
			</div>
			<RedirectInfo
				text='Need an account? '
				redirectText='Create an account'
				additionalStyles={{ marginTop: '5px' }}
				redirectHandler={handlePushToSignupPage}
			/>
		</>
	)
}

export default SigninPageFooter
