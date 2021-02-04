import React from 'react';
import { Text } from '@chakra-ui/react';
import WrappedLink from '../../ChakraComponents/WrappedLink';

export const NavMenuItem = (props: any) => {
	const { children, isLast, to = '/', ...rest } = props;
	return (
		<WrappedLink href={to}>
			<Text
				fontSize={16}
				display='block'
				_hover={{ textDecoration: 'none', color: 'linkOrange' }}
				{...rest}
			>
				{children}
			</Text>
		</WrappedLink>
	);
};

export default NavMenuItem;