import React from 'react';
import HomeJumbotron from './HomeJumbotron';
import JumbotronGridTemplate from '../shared/JumbotronGridTemplate';

export const Home = (props) => {
	return (
		<JumbotronGridTemplate {...props}>
			<HomeJumbotron />
		</JumbotronGridTemplate>
	);
};

export default Home;
