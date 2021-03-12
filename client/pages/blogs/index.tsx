import React, { FC, memo, useEffect } from 'react';
import { MetaInfo } from '../../components/shared/MetaInfo';
import { fetcher } from '../../lib/fetcher';
import { PaginatedBlog } from '../../models/PaginatedBlog';
import { GetServerSideProps } from 'next';
import { BlogMin } from '../../models/BlogMin';
import { useDispatch } from 'react-redux';
import { updateBlogs, updateFeaturedBlog } from '../../redux/slices/BlogSlice';
import BlogsJumbotron from '../../components/Blog/BlogsJumbotron';
import JumbotronGridTemplate from '../../components/shared/JumbotronGridTemplate';
import { BLOG as BLOG_ROUTES } from '../../constants/routes';
import { BLOG as BLOG_ENDPOINTS } from '../../constants/endpoints';

interface BlogsProps {
	blogs: PaginatedBlog;
	featuredBlog: BlogMin;
}

export const Index: FC<BlogsProps> = ({ blogs, featuredBlog }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateBlogs(blogs));
		dispatch(updateFeaturedBlog(featuredBlog));
	}, []);

	return (
		<>
			<MetaInfo
				title='MacroBros - Blogs'
				description='Welcome to MacroBros blog. From here you can search for a particular topic of interest, choose from one of our categories or possibly read one of our top blog posts as voted by our users'
			/>
			<JumbotronGridTemplate paginationUrl={BLOG_ROUTES.BLOGS}>
				<BlogsJumbotron />
			</JumbotronGridTemplate>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const blogs: PaginatedBlog = await fetcher(BLOG_ENDPOINTS.BLOGS);
	const featuredBlog: BlogMin = await fetcher(BLOG_ENDPOINTS.FEATURED);
	return { props: { blogs, featuredBlog } };
};

export default memo(Index);
