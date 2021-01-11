import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryBlogs } from '../../../../actions/blog/blog';
import Pagination from 'react-bootstrap/Pagination';
import PaginationBar from '../../../shared/Pagination';
import SideBar from '../side-bar/SideBar';
import BlogGridBuilder from '../blog-grid-builder/BlogGridBuilder';
import LoadingSpinner from '../../../shared/LoadingSpinner';
import { formatPageHeading } from '../../../../utils/stringUtils';
import './CategoryBlogs.scss';
import MetaTags from '../../../shared/MetaTags';

export const CategoryBlogs = (props) => {
	const dispatch = useDispatch();
	const blogs = useSelector((state) => state.blog.categoryBlogs);
	const [category, setCategory] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setCategory(formatPageHeading(props.match.params.category));
		dispatch(getCategoryBlogs(props.match.params.category));
	}, [category]);

	useEffect(() => {
		if (blogs.results !== undefined && blogs.results.length !== 0) {
			setIsLoading(false);
		}
	}, [blogs]);

	const loadPages = (pageNumber) => {
		getCategoryBlogs(category, pageNumber);
	};

	return (
		<div className='category-body min-vh-100'>
			<MetaTags
				description={`These are all of the MacroBros blogs currently under the ${category} category`}
				title={category}
			/>
			<div className='container-fluid pt-3'>
				<div className='row'>
					<div className='col-12 col-md-8 col-lg-9'>
						<h3 className='mb-4'>{category}</h3>

						{isLoading ? (
							<LoadingSpinner isLoading={isLoading} />
						) : (
							<BlogGridBuilder blogs={blogs.results} />
						)}
					</div>
					<div className='col-12 col-md-4 col-lg-3'>
						<SideBar props={props} showSearch={true} />
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

export default CategoryBlogs;
