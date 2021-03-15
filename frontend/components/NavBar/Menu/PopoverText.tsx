import React, { FC } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Text } from '@chakra-ui/react';

interface PopoverTextProps {
	color: string;
}

export const PopoverText: FC<PopoverTextProps> = ({ children, color }) => {
	const isDark = useColorModeValue(false, true);

	return (
		<Text
			fontSize={'lg'}
			color={isDark ? 'white' : color}
			fontWeight={'normal'}
			_hover={{ color: isDark ? 'blue.300' : 'black', fontWeight: 'normal' }}
			cursor={'pointer'}
		>
			{children}
		</Text>
	);
};
