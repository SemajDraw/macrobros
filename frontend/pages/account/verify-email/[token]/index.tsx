import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { verifyEmail } from '../../../../redux/actions/accountActions';
import FormSubmitPage from '../../../../components/shared/FormSubmitPage';
import { emailVerificationSelector } from '../../../../redux/slices/AccountSlice';
import LoadingPage from '../../../../components/shared/Loading/LoadingPage';
import { HOME } from '../../../../constants/routes';
import { useAuth } from '../../../../providers/AuthProvider';

export const Index: FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const emailVerification = useSelector(emailVerificationSelector);
	const { token } = router.query;
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (isAuthenticated) router.push(HOME);
	}, [isAuthenticated]);

	useEffect(() => {
		dispatch(verifyEmail(token as string));
	}, [token]);

	return emailVerification.message.length === 0 ? (
		<LoadingPage />
	) : (
		<FormSubmitPage
			body={emailVerification && emailVerification?.message[1]}
			meta={{
				title: 'MacroBros - Verify Email',
				description: 'Please verify the email you used to register your MacroBros account!'
			}}
			heading={emailVerification && emailVerification?.message[0]}
			icons={true}
		/>
	);
};

export default Index;
