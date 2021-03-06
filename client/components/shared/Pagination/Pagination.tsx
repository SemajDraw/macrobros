import React, { FC } from 'react';
import { Flex } from '@chakra-ui/layout';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import { SEARCH } from '../../../constants/routes';
import { PaginatedBlog } from '../../../models/PaginatedBlog';

interface PaginationProps {
	blogs: PaginatedBlog;
	url: string;
	query?: string | string[] | undefined;
}

export const Pagination: FC<PaginationProps> = ({ blogs, url, query }) => {
	const router = useRouter();

	const handlePageClick = ({ selected }) => {
		if (url === SEARCH) {
			router.push(`${url}?query=${query}&page=${selected + 1}`);
		} else {
			router.push(`${url}?page=${selected + 1}`);
		}
	};

	return (
		<Flex justifyContent={'center'}>
			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				forcePage={blogs?.pageNumber - 1}
				pageCount={blogs?.totalPages}
				onPageChange={handlePageClick}
				containerClassName={'pagination'}
				previousLinkClassName={'pagination__link'}
				nextLinkClassName={'pagination__link'}
				disabledClassName={'pagination__link--disabled'}
				activeClassName={'pagination__link--active'}
			/>
		</Flex>
	);
};
