import React, { FC, useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { LoadingSpinner } from './Loading/LoadingSpinner';
import { BlogGridSideBar } from './BlogGridSideBar';
import { Pagination } from './Pagination/Pagination';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { BLOG } from '../../redux/types';
import { getBlogs } from '../../redux/actions/blogActions';
import { PaginatedBlogs } from '../../models/PaginatedBlogs';

interface JumbotronGridTemplateProps {
	serverPropBlogs: PaginatedBlogs;
	paginationUrl: string;
}

export const JumbotronGridTemplate: FC<JumbotronGridTemplateProps> = ({
	children,
	serverPropBlogs,
	paginationUrl
}) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const blogs = useSelector((state) => state.blog.blogs);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (router.query.page) {
			setLoading(true);
			dispatch(getBlogs(router.query.page));
		} else {
			dispatch({
				type: BLOG.GET_BLOGS,
				payload: serverPropBlogs
			});
			setLoading(false);
		}
	}, [router.query]);

	useEffect(() => {
		setLoading(false);
	}, [blogs]);

	return (
		<Box style={{ minHeight: '100vh' }}>
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
					<BlogGridSideBar {...blogs} />
				</>
			)}
			<Flex my={8} justifyContent={'center'}>
				<Pagination blogs={blogs} url={paginationUrl} />
			</Flex>
		</Box>
	);
};

export default JumbotronGridTemplate;
