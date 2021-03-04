import React, { FC } from 'react';
import HomeJumbotron from './HomeJumbotron';
import JumbotronGridTemplate from '../shared/JumbotronGridTemplate';
import { HOME } from '../../constants/routes';
import { HomeProps } from '../../pages';

export const Home: FC<HomeProps> = ({ blogs }) => {
	return (
		<JumbotronGridTemplate serverPropBlogs={blogs} paginationUrl={HOME}>
			<HomeJumbotron />
		</JumbotronGridTemplate>
	);
};

export default Home;
