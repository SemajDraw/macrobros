import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearchBlogs } from '../../../../actions/blog/blog';
import Pagination from 'react-bootstrap/Pagination';
import PaginationBar from '../../../common/Pagination';
import SideBar from '../side-bar/SideBar';
import BlogGridBuilder from '../blog-grid-builder/BlogGridBuilder';
import LoadingSpinner from '../../../common/LoadingSpinner';
import NoResults from './NoResults';
import SearchBar from '../side-bar/SearchBar';
import './SearchBlogs.scss';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export const SearchBlogs = (props) => {
	const query = useQuery();
	const dispatch = useDispatch();
	const blogs = useSelector((state) => state.blog.searchBlogs);
	const search = query.get('search_value');
	const [isLoading, setIsLoading] = useState(true);
	const [hasResults, setHasResults] = useState(false);
	const [totalResults, setTotalResults] = useState(null);

	useEffect(() => {
		dispatch(getSearchBlogs(search));
	}, [search]);

	useEffect(() => {
		if (blogs.results !== undefined) {
			if (blogs.results.length !== 0) {
				setHasResults(true);
				setIsLoading(false);
			}
			if (blogs.results.length === 0) {
				setHasResults(false);
				setIsLoading(false);
			}
			setTotalResults(blogs.totalItems);
		}
	}, [blogs]);

	const loadPages = (pageNumber) => {
		dispatch(getSearchBlogs(search, pageNumber));
	};

	return (
		<div className='search-body min-vh-100'>
			<div className='container-fluid pt-3'>
				<div className='row'>
					<div className='col-12 col-md-8 col-lg-9'>
						<h1>Search</h1>
						<SearchBar props={props} />
						<hr />
						<p>{totalResults} results found</p>

						{isLoading ? (
							<LoadingSpinner isLoading={isLoading} />
						) : hasResults ? (
							<BlogGridBuilder blogs={blogs.results} />
						) : (
							<NoResults />
						)}
					</div>
					<div className='col-12 col-md-4 col-lg-3'>
						<SideBar props={props} showSearch={false} />
					</div>
				</div>
			</div>
			<div className='row justify-content-center my-3'>
				{blogs.totalItems > 2 ? (
					<Pagination>
						<PaginationBar blogs={blogs} nextPage={loadPages} />
					</Pagination>
				) : null}
			</div>
		</div>
	);
};

export default SearchBlogs;
