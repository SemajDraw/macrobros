import React from 'react';
import { Text } from '@chakra-ui/react';
import Link from './ChakraComponents/Link';

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
		<Link href={href}>
			<LinkText {...rest} />
		</Link>
	) : (
		<LinkText {...rest} />
	);
};

export default LinkItem;
