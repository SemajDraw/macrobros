import React from 'react';
import { Text } from '@chakra-ui/react';
import WrappedLink from './ChakraComponents/WrappedLink';

export const LinkText = (props: any) => {
	const { children, color, cursor, size } = props;
	return (
		<Text
			my={2}
			display='block'
			fontSize={size}
			fontFamily='"Lexend Zetta", sans-serif'
			color={color}
			cursor={cursor}
			_hover={{ color: 'linkOrange' }}
		>
			{children}
		</Text>
	);
};

export const LinkItem = (props: any) => {
	const { href, ...rest } = props;
	return href ? (
		<WrappedLink href={href}>
			<LinkText {...rest} />
		</WrappedLink>
	) : (
		<LinkText {...rest} />
	);
};

export default LinkItem;
