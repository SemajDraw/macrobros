import React, { FC } from 'react';
import BlogsJumbotron from './BlogsJumbotron';
import JumbotronGridTemplate from '../shared/JumbotronGridTemplate';
import { BLOG } from '../../constants/routes';
import { PaginatedBlog } from '../../models/PaginatedBlog';

interface BlogsProps {
	blogs: PaginatedBlog;
}

export const Blogs: FC<BlogsProps> = ({ blogs }) => {
	return (
		<JumbotronGridTemplate serverPropBlogs={blogs} paginationUrl={BLOG.BLOGS}>
			<BlogsJumbotron />
		</JumbotronGridTemplate>
	);
};

export default Blogs;
