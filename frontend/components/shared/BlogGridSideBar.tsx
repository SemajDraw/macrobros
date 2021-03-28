import React, { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/layout';
import { BlogGrid } from '../Blog/BlogGrid/BlogGrid';
import { SideBar } from '../SideBar/SideBar';
import StickyBox from 'react-sticky-box';
import { PaginatedBlog } from '../../models/PaginatedBlog';

export const BlogGridSideBar: FC<PaginatedBlog> = ({ results }) => {
	return (
		<Grid
			templateColumns='repeat(12, 1fr)'
			gap={6}
			my={{ base: 6, md: 8, lg: 10 }}
			mx={{ base: '3vw', md: '8vw', lg: '9vw' }}
		>
			<GridItem gridGap={2} colSpan={{ base: 12, lg: 9 }} mx='auto'>
				<BlogGrid blogs={results} />
			</GridItem>
			<GridItem colSpan={{ base: 12, lg: 3 }}>
				<StickyBox offsetTop={30}>
					<SideBar />
				</StickyBox>
			</GridItem>
		</Grid>
	);
};
