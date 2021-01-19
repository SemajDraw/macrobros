import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import NavMenu from './NavMenu';
import { MacroBrosIcon } from '../shared/MacroBrosIcon';

const Header = (props) => {
	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			padding='1.5rem'
			px={['2em', '3em', '6em']}
			bg='layoutBlack'
			color='white'
			{...props}
		>
			<Box h={12} w={12} cursor={'pointer'}>
				<MacroBrosIcon id='nav' strokeColor='white' />
			</Box>

			<Flex
				display={{ base: 'none', sm: 'block' }}
				align='center'
			>
				<Box>
					<Heading
						as='h1'
						size='md'
						letterSpacing={'-.1rem'}
						fontWeight={200}
						fontFamily='"Lexend Zetta", sans-serif'
						_hover={{ color: 'linkOrange' }}
						cursor={'pointer'}
					>
						Blogs
					</Heading>
				</Box>
			</Flex>

			<NavMenu isAuthenticated={true} firstName={'James'} />
		</Flex>
	);
};

export default Header;
