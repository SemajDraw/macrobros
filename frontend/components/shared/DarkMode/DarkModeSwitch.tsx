import React, { FC } from 'react';
import { Switch, useColorMode } from '@chakra-ui/react';

export const DarkModeSwitch: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Switch
			top='1rem'
			right='1rem'
			color='green'
			isChecked={colorMode === 'dark'}
			onChange={toggleColorMode}
		/>
	);
};
