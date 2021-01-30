import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ACCOUNT } from '../../../constants/routes';
import FormPage from '../../../components/shared/FormPage';
import LoginForm from './LoginForm';
import WrappedLink from '../../../components/ChakraComponents/WrappedLink';
import { parseCookie } from '../../../lib/parseCookies';

export const Index = () => {
	return (
		<FormPage
			icons={true}
			heading={'Sign in to MacroBros'}
			meta={{
				title: 'MacroBros - Login',
				desc:
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
					<Text mr={1} fontSize={'sm'}>
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

export async function getServerSideProps({ req, res }: any) {
	const { token } = parseCookie(req);
	if (token) {
		res.writeHead(302, { Location: '/' });
		res.end();
		return { props: {} };
	}

	return { props: {} };
}

export default Index;
