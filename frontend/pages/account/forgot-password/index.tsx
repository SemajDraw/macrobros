import React, { FC, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { parseCookie } from '../../../library/parseCookies';
import FormPage from '../../../components/shared/FormPage';
import { Flex, Text } from '@chakra-ui/react';
import { WrappedLink } from '../../../components/ChakraComponents/WrappedLink';
import { ACCOUNT, HOME } from '../../../constants/routes';
import { useRouter } from 'next/router';
import { useAuth } from '../../../providers/AuthProvider';
import ForgotPasswordForm from '../../../components/ForgotPassword/ForgotPasswordForm';

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
			<ForgotPasswordForm />

			<Flex
				my={5}
				p={6}
				borderWidth='1px'
				borderRadius='lg'
				overflow='hidden'
				shadow='lg'
				justifyContent='center'
			>
				<Flex>
					<Text mr={1} fontSize={'md'}>
						New to MacroBros?{' '}
						<WrappedLink
							color='blue.500'
							_hover={{ color: 'blue.700' }}
							href={ACCOUNT.REGISTER}
						>
							Create an account.
						</WrappedLink>
					</Text>
				</Flex>
			</Flex>
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
