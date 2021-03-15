import React, { FC, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { parseCookie } from '../../../lib/parseCookies';
import { useRouter } from 'next/router';
import { useAuth } from '../../../providers/AuthProvider';
import { HOME } from '../../../constants/routes';
import FormPage from '../../../components/shared/FormPage';
import PasswordResetForm from '../../../components/Account/PasswordResetForm';

export const Index: FC = () => {
	const router = useRouter();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (isAuthenticated) router.push(HOME);
	}, [isAuthenticated]);

	return (
		<FormPage
			icons={true}
			heading={'Reset Password'}
			meta={{
				title: 'MacroBros - Reset Password',
				description:
					'If you have forgotten you password. Please enter your email address and we will send you ' +
					'a link to reset your password.'
			}}
		>
			<PasswordResetForm />
		</FormPage>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const { token } = parseCookie(req);
	if (token) {
		res.writeHead(302, { Location: '/' });
		res.end();
		return { props: {} };
	}
	return { props: {} };
};

export default Index;
