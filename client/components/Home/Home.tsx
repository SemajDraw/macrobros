import React from 'react';
import Head from 'next/head';
import HomeJumbotron from './HomeJumbotron';
import useBlogs from '../../hooks/useBlogs';
import { Flex } from '@chakra-ui/react';
import LoadingSpinner from '../shared/LoadingSpinner';
import BlogGridSideBar from '../shared/BlogGridSideBar';
import JumbotronGridTemplate from '../shared/JumbotronGridTemplate';

export const Home = ({ initialData }) => {
	const { blogs, loading, error } = useBlogs(initialData);

	return (
		<JumbotronGridTemplate initialData={initialData}>
			<HomeJumbotron />
		</JumbotronGridTemplate>
	);
};

export default Home;
