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
				<>
					<BlogGridSideBar blogs={blogs} />
				</>
			)}
		</div>
	);
};

export default Home;
