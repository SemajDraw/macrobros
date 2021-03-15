import React, { FC } from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { WrappedLink } from '../../ChakraComponents/WrappedLink';
import { HOME } from '../../../constants/routes';

interface NavMenuItemProps extends TextProps {
	to: string;
}

export const NavMenuItem: FC<NavMenuItemProps> = ({ children, to = HOME, ...rest }) => {
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
