import React, { FC, memo, useEffect } from 'react';
import { MetaInfo } from '../../components/shared/MetaInfo';
import { fetcher } from '../../library/fetcher';
import { PaginatedBlog } from '../../models/PaginatedBlog';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { BlogMin } from '../../models/BlogMin';
import { useDispatch } from 'react-redux';
import { updateBlogs, updateFeaturedBlog } from '../../redux/slices/BlogSlice';
import BlogsJumbotron from '../../components/Blog/BlogsJumbotron';
import JumbotronGridTemplate from '../../components/shared/JumbotronGridTemplate';
import { BLOG as BLOG_ROUTES } from '../../constants/routes';
import { paginateUrl } from '../../utils/stringUtils';

export const Index: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	blogs,
	featuredBlog
}) => {
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
			<JumbotronGridTemplate blogs={blogs} paginationUrl={BLOG_ROUTES.BLOGS}>
				<BlogsJumbotron />
			</JumbotronGridTemplate>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { page } = context.query;
	let blogsUrl: string;
	let featuredBlogUrl: string;
	if (process.env.NODE_ENV !== 'production') {
		blogsUrl = 'http://localhost:8000/api/blog/';
		featuredBlogUrl = 'http://localhost:8000/api/blog/featured';
	} else {
		blogsUrl = 'http://macrobros-api:8000/api/blog/';
		featuredBlogUrl = 'http://macrobros-api:8000/api/blog/featured';
	}

	const blogs: PaginatedBlog = await fetcher(paginateUrl(blogsUrl, page));
	const featuredBlog: BlogMin = await fetcher(featuredBlogUrl);

	return { props: { blogs, featuredBlog } };
};

export default memo(Index);
