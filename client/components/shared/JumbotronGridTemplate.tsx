import React from 'react';
import { Flex } from '@chakra-ui/react';
import useBlogs from '../../hooks/useBlogs';
import LoadingSpinner from './Loading/LoadingSpinner';
import BlogGridSideBar from './BlogGridSideBar';

export const JumbotronGridTemplate = ({ children, ...props }) => {
	const { blogs, loading } = useBlogs(props.blogs);

	return (
		<div style={{ minHeight: '100vh' }}>
			{children}

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
					<BlogGridSideBar
						key={'home'}
						blogs={blogs}
						categories={props.categories}
					/>
				</>
			)}
		</div>
	);
};

export default JumbotronGridTemplate;
