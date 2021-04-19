import React, { FC, useEffect } from 'react';
import { BLOG } from '../constants/endpoints';
import { fetcher } from '../library/fetcher';
import { MetaInfo } from '../components/shared/MetaInfo';
import { PaginatedBlog } from '../models/PaginatedBlog';
import { GetServerSideProps } from 'next';
import { HOME } from '../constants/routes';
import HomeJumbotron from '../components/Home/HomeJumbotron';
import JumbotronGridTemplate from '../components/shared/JumbotronGridTemplate';
import { useDispatch } from 'react-redux';
import { updateBlogs } from '../redux/slices/BlogSlice';

export interface HomeProps {
	blogs: PaginatedBlog;
}

export const Index: FC<HomeProps> = ({ blogs }) => {
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
			<JumbotronGridTemplate paginationUrl={HOME}>
				<HomeJumbotron />
			</JumbotronGridTemplate>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const blogs: PaginatedBlog =
		process.env.ENV !== 'prod'
			? await fetcher('http://localhost:8000/api/blog/')
			: await fetcher('http://macrobros-api:8000/api/blog/');

	return { props: { blogs } };
};

export default Index;
