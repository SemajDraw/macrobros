import React, { FC, useEffect } from 'react';
import { fetcher } from '../library/fetcher';
import { MetaInfo } from '../components/shared/MetaInfo';
import { PaginatedBlog } from '../models/PaginatedBlog';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { HOME } from '../constants/routes';
import HomeJumbotron from '../components/Home/HomeJumbotron';
import JumbotronGridTemplate from '../components/shared/JumbotronGridTemplate';
import { useDispatch } from 'react-redux';
import { updateBlogs } from '../redux/slices/BlogSlice';
import { paginateUrl } from '../utils/stringUtils';

export const Index: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	blogs
}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateBlogs(blogs));
	}, []);

	return (
		<>
			<MetaInfo
				title={'MacroBros'}
				description={
					'This is the MacroBros blog website, where 2 brothers discuss macroeconomic topics with a focus on wealth preservation, cryptocurrencies, stocks and much more.'
				}
			/>
			<JumbotronGridTemplate blogs={blogs} paginationUrl={HOME}>
				<HomeJumbotron />
			</JumbotronGridTemplate>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { page } = context.query;

	const url =
		process.env.NODE_ENV !== 'production'
			? 'http://localhost:8000/api/blog/'
			: 'http://macrobros-api:8000/api/blog/';
	const blogs: PaginatedBlog = await fetcher(paginateUrl(url, page));

	return { props: { blogs } };
};

export default Index;
