import React, { FC } from 'react';
import { Button } from '@chakra-ui/button';
import { HOME } from '../constants/routes';
import { Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { WrappedLink } from '../components/ChakraComponents/WrappedLink';

export const Index: FC = () => {
	return (
		<Flex
			bgGradient='linear(to-b, #471c71, #FFAF7B)'
			h={'90vh'}
			w={'100vw'}
			position={'relative'}
		>
			<Flex
				w={'100%'}
				direction={'column'}
				justify={'center'}
				align={'center'}
				mx={{ base: '10vw', sm: '20vw', md: '30vw', lg: '35vw' }}
			>
				<Heading
					color={'white'}
					fontWeight={'light'}
					fontSize={{ base: '5em', md: '6em', lg: '8em' }}
				>
					404
				</Heading>
				<Flex w={'100%'} color={'white'} align={'center'} fontSize={'2em'}>
					<Divider mr={2} />
					<Text>&#183;</Text>
					<Divider ml={2} />
				</Flex>
				<Text
					align={'center'}
					color={'white'}
					fontSize={{ base: '1.2em', md: '2em', lg: '2em' }}
					w={'100%'}
				>
					PAGE NOT FOUND
				</Text>
				<Flex w={'100%'} justify={'center'} mt={6}>
					<WrappedLink href={HOME}>
						<Button color={'#636363'} _hover={{ color: 'linkOrange' }}>
							BACK TO HOME
						</Button>
					</WrappedLink>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Index;
