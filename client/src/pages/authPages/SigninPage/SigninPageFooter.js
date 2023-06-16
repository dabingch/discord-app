import React from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../../../components/PrimaryButton'
import RedirectInfo from '../../../components/RedirectInfo'
import { Tooltip } from '@mui/material'

const getFormInvalidMessage = () => {
	return 'Email and password should be between 6 and 12 characters long'
}

const getFormValidMessage = () => {
	return 'Press to log in!'
}

const SigninPageFooter = ({ handleSignin, isFormValid }) => {
	const navigate = useNavigate()

	const handlePushToSignupPage = () => {
		navigate('/signup')
	}

	return (
		<>
			<Tooltip
				title={
					!isFormValid
						? getFormInvalidMessage()
						: getFormValidMessage()
				}
			>
				<div>
					<PrimaryButton
						label='Sign in'
						onClick={handleSignin}
						disabled={!isFormValid}
						additionalStyles={{ marginTop: '30px' }}
					/>
				</div>
			</Tooltip>
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
