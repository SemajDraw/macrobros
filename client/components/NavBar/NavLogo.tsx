import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { MacroBrosIcon } from '../shared/MacroBrosIcon';
import { HOME } from '../../constants/routes';

export const NavLogo = ({ display }) => {
	return (
		<Link href={HOME} _hover={{ textDecoration: 'none' }}>
			<Flex align='center' cursor={'pointer'}>
				<Box h={12} w={12}>
					<MacroBrosIcon id='nav' strokeColor='white' />
				</Box>
				<Box>
					<Text color='white' display={display} fontSize={20} ml={3}>
						MacroBros
					</Text>
				</Box>
			</Flex>
		</Link>
	);
};

export default NavLogo;
