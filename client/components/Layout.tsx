import React from 'react';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

export const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<NavBar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
