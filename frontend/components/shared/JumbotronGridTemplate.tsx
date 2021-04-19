import React, { FC, memo, ReactElement, useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { LoadingSpinner } from './Loading/LoadingSpinner';
import { BlogGridSideBar } from './BlogGridSideBar';
import { Pagination } from './Pagination/Pagination';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../redux/actions/blogActions';
import { blogsSelector, updateBlogs } from '../../redux/slices/BlogSlice';
import { PaginatedBlog } from '../../models/PaginatedBlog';

interface JumbotronGridTemplateProps {
	blogs: PaginatedBlog;
	children: ReactElement;
	paginationUrl: string;
}

export const JumbotronGridTemplate: FC<JumbotronGridTemplateProps> = ({
	blogs,
	children,
	paginationUrl
}) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const paginatedBlog = useSelector(blogsSelector);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (router.query.page) {
			setLoading(true);
			dispatch(getBlogs(router.query.page as string));
		} else {
			dispatch(updateBlogs(blogs));
			setLoading(false);
		}
	}, [router.query]);

	useEffect(() => {
		setLoading(false);
	}, [paginatedBlog]);

	return (
		<Box>
			{children}

			{typeof window === 'undefined' ? <BlogGridSideBar {...blogs} /> : null}
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
				<BlogGridSideBar {...paginatedBlog} />
			)}
			<Flex my={8} justifyContent={'center'}>
				<Pagination blogs={paginatedBlog} url={paginationUrl} />
			</Flex>
		</Box>
	);
};

export default memo(JumbotronGridTemplate);
