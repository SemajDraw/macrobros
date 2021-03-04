import React, { FC } from 'react';
import BlogsJumbotron from './BlogsJumbotron';
import JumbotronGridTemplate from '../shared/JumbotronGridTemplate';
import { BLOG } from '../../constants/routes';
import { PaginatedBlogs } from '../../models/PaginatedBlogs';

interface BlogsProps {
	blogs: PaginatedBlogs;
}

export const Blogs: FC<BlogsProps> = ({ blogs }) => {
	return (
		<JumbotronGridTemplate serverPropBlogs={blogs} paginationUrl={BLOG.BLOGS}>
			<BlogsJumbotron />
		</JumbotronGridTemplate>
	);
};

export default Blogs;
