import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import { ACCOUNT } from '../../../constants/routes';
import LoginRegister from '../../../components/shared/LoginRegister';
import RegisterForm from './RegisterForm';

export const Index = () => {
	return (
		<LoginRegister
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
						<Link
							color='blue.500'
							_hover={{ color: 'blue.700' }}
							href={ACCOUNT.LOGIN}
						>
							Please login.
						</Link>
					</Text>
				</Flex>
			</Flex>
		</LoginRegister>
	);
};

export default Index;
