import React from 'react';
import Head from 'next/head';
import HomeJumbotron from './HomeJumbotron';
import useBlogs from '../../hooks/useBlogs';
import { Flex } from '@chakra-ui/react';
import LoadingSpinner from '../shared/Loading/LoadingSpinner';
import BlogGridSideBar from '../shared/BlogGridSideBar';
import BlogsJumbotron from './BlogsJumbotron';
import JumbotronGridTemplate from '../shared/JumbotronGridTemplate';

export const Blogs = ({ initialData }) => {
	const { blogs, loading, error } = useBlogs(initialData);

	return (
		<JumbotronGridTemplate initialData={initialData}>
			<BlogsJumbotron />
		</JumbotronGridTemplate>
	);
};

export default Blogs;
