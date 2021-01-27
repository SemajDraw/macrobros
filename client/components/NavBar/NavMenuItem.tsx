import React from 'react';
import { Text } from '@chakra-ui/react';
import Link from '../ChakraComponents/Link';

export const NavMenuItem = (props: any) => {
	const { children, isLast, to = '/', ...rest } = props;
	return (
		<Text
			mb={{ base: isLast ? 0 : 8, sm: 0 }}
			mr={{ base: 0, sm: isLast ? 0 : 8 }}
			fontSize={16}
			display='block'
			{...rest}
		>
			<Link _hover={{ textDecoration: 'none', color: 'linkOrange' }} href={to}>
				{children}
			</Link>
		</Text>
	);
};

export default NavMenuItem;
