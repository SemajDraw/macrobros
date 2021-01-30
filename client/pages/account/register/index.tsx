import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ACCOUNT } from '../../../constants/routes';
import FormPage from '../../../components/shared/FormPage';
import RegisterForm from './RegisterForm';
import WrappedLink from '../../../components/ChakraComponents/WrappedLink';
import { parseCookie } from '../../../lib/parseCookies';

export const Index = () => {
	return (
		<FormPage
			icons={false}
			meta={{
				title: 'MacroBros - Sign Up',
				desc:
					'Create your MacroBros account today and keep up to date with the most relevant financial topics'
			}}
			heading={'Create your account'}
		>
			<RegisterForm />

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
					<Text mr={1}>
						Already have an account?{' '}
						<WrappedLink
							color='blue.500'
							_hover={{ color: 'blue.700' }}
							href={ACCOUNT.LOGIN}
						>
							Please login.
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
