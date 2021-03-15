import React, { FC } from 'react';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

interface WrappedLinkProps extends LinkProps {
	href: string;
}

export const WrappedLink: FC<WrappedLinkProps> = (props) => {
	const { children, href, ...rest } = props;

	return (
		<NextLink passHref href={href}>
			<ChakraLink {...rest} _hover={{ textDecoration: 'none' }}>
				{children}
			</ChakraLink>
		</NextLink>
	);
};
