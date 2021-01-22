import React from 'react';
import { Link, Text } from '@chakra-ui/react';

export const NavMenuItem = (props) => {
	const { children, isLast, to = '/', ...rest } = props;
	return (
		<Text
			mb={{ base: isLast ? 0 : 8, sm: 0 }}
			mr={{ base: 0, sm: isLast ? 0 : 8 }}
			fontSize={18}
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
