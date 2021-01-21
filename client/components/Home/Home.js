import React from 'react';
import Head from 'next/head';
import HomeJumbotron from './HomeJumbotron';
import useBlogs from '../../hooks/useBlogs';
import { Flex } from '@chakra-ui/react';
import LoadingSpinner from '../shared/LoadingSpinner';
import BlogGridSideBar from '../shared/BlogGridSideBar';

export const Home = ({ initialData }) => {
	const { blogs, loading, error } = useBlogs(initialData);

	return (
		<div style={{ minHeight: '100vh' }}>
			<Head>
				<title>MacroBros</title>
				<meta
					name='description'
					content='This is the MacroBros blog website, where 2 brothers discuss macroeconomic topics with
					 a focus on wealth preservation, cryptocurrencies, stocks and much more.'
				/>
			</Head>

			<HomeJumbotron />

			{loading ? (
				<Flex
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					minHeight='40vh'
				>
					<LoadingSpinner isLoading={loading} />
				</Flex>
			) : (
				<BlogGridSideBar blogs={blogs} />
			)}
			{JSON.stringify(blogs)}
		</div>
	);
};

export default Home;
