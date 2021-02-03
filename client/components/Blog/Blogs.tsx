import React from 'react';
import BlogsJumbotron from './BlogsJumbotron';
import JumbotronGridTemplate from '../shared/JumbotronGridTemplate';

export const Blogs = ({ initialData }: any) => {
	return (
		<JumbotronGridTemplate initialData={initialData}>
			<BlogsJumbotron />
		</JumbotronGridTemplate>
	);
};

export default Blogs;
