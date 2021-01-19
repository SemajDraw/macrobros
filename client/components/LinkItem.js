import React from 'react';
import { Text } from '@chakra-ui/react';

export const LinkItem = ({ children, color, size, cursor }) => {
	return (
		<Text
			my={2}
			display='block'
			size={size}
			fontFamily='"Lexend Zetta", sans-serif'
			color={color}
			cursor={cursor}
			_hover={{ color: 'linkOrange' }}
		>
			{children}
		</Text>
	);
};

export default LinkItem;
