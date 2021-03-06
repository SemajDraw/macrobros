import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { WrappedLink } from './ChakraComponents/WrappedLink';
import { TextProps } from '@chakra-ui/layout/dist/types/text';

export const LinkText: FC<TextProps> = ({ children, color, cursor, size }) => {
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

interface LinkItemProps extends TextProps {
	href?: string;
}

export const LinkItem: FC<LinkItemProps> = (props) => {
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
