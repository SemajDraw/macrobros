import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { MacroBrosIcon } from '../shared/Icons/MacroBrosIcon';
import { HOME } from '../../constants/routes';
import WrappedLink from '../ChakraComponents/WrappedLink';

export const NavLogo = ({ display }) => {
	return (
		<WrappedLink href={HOME} _hover={{ textDecoration: 'none' }}>
			<Flex align='center' cursor={'pointer'}>
				<Box h={12} w={12}>
					<MacroBrosIcon id='nav' strokeColor='white' />
				</Box>
				<Box>
					<Text color='white' display={display} fontSize={18} ml={3}>
						MacroBros
					</Text>
				</Box>
			</Flex>
		</WrappedLink>
	);
};

export default NavLogo;
