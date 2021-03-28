import React, { FC } from 'react';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import LoadingBar from './shared/Loading/LoadingBar';
import { Box } from '@chakra-ui/layout';

export const Layout: FC = ({ children }) => {
	return (
		<Box minHeight={'100vh'}>
			<NavBar />
			<LoadingBar />
			{children}
			<Footer />
		</Box>
	);
};
