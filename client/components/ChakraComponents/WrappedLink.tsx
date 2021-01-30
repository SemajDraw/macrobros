import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

export const WrappedLink = (props: any) => {
	const { children, href, ...rest } = props;

	return (
		<NextLink passHref href={href}>
			<ChakraLink {...rest} _hover={{ textDecoration: 'none' }}>
				{children}
			</ChakraLink>
		</NextLink>
	);
};

export default WrappedLink;
