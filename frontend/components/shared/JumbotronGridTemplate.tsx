import React, { FC, memo, ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { BlogGridSideBar } from './BlogGridSideBar';
import { Pagination } from './Pagination/Pagination';
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
	return (
		<Box>
			{children}

			<BlogGridSideBar {...blogs} />
			<Flex my={8} justifyContent={'center'}>
				<Pagination blogs={blogs} url={paginationUrl} />
			</Flex>
		</Box>
	);
};

export default memo(JumbotronGridTemplate);
