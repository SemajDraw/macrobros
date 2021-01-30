import React from 'react';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import LoadingBar from './shared/Loading/LoadingBar';

export const Layout = ({ children }: any) => {
	return (
		<div className='layout'>
			<NavBar />
			<LoadingBar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
