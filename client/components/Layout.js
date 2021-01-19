import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

export const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<NavBar />
			{children}footer
			<Footer />
		</div>
	);
};

export default Layout;
