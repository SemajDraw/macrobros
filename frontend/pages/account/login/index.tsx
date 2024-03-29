import React, { FC, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ACCOUNT, HOME } from '../../../constants/routes';
import { parseCookie } from '../../../library/parseCookies';
import { useRouter } from 'next/router';
import { useAuth } from '../../../providers/AuthProvider';
import FormPage from '../../../components/shared/FormPage';
import LoginForm from '../../../components/Account/LoginForm';
import { WrappedLink } from '../../../components/ChakraComponents/WrappedLink';
import { GetServerSideProps } from 'next';

export const Index: FC = () => {
	const router = useRouter();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (isAuthenticated) router.push(HOME);
	}, [isAuthenticated]);

	return (
		<FormPage
			icons={true}
			heading={'Sign in to MacroBros'}
			meta={{
				title: 'MacroBros - Login',
				description:
					"Please sign into your MacroBros account. If you don't have an account, what are you waiting for?"
			}}
		>
			<LoginForm />

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
