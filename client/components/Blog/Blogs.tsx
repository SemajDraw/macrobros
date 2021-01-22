import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import { Flex } from '@chakra-ui/react';
import LoadingSpinner from '../shared/LoadingSpinner';
import BlogGridSideBar from '../shared/BlogGridSideBar';
import BlogsJumbotron from './BlogsJumbotron';

export const Blogs = ({ initialData }) => {
	const { blogs, loading, error } = useBlogs(initialData);

	return (
		<div style={{ minHeight: '100vh' }}>

			askldjf
		</div>
	);
};

export default Blogs;
