import React from 'react'
import PrimaryButton from '../../../components/PrimaryButton'

const SigninPageFooter = ({ handleSignin, isFormValid }) => {
	return (
		<div>
			<PrimaryButton
				label='Sign in'
				onClick={handleSignin}
				disabled={!isFormValid}
				additionalStyles={{ marginTop: '30px' }}
			/>
		</div>
	)
}

export default SigninPageFooter
