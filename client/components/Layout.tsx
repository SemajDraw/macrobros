import React, { FC } from 'react';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import LoadingBar from './shared/Loading/LoadingBar';

export const Layout: FC = ({ children }) => {
	return (
		<div className='layout'>
			<NavBar />
			<LoadingBar />
			{children}
			<Footer />
		</div>
	);
};
