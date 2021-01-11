import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import PaginationBar from '../../shared/Pagination';
import SideBar from './side-bar/SideBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import BlogGridBuilder from './blog-grid-builder/BlogGridBuilder';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, getFeaturedBlog } from '../../../actions/blog/blog';
import LoadingSpinner from '../../shared/LoadingSpinner';
import MetaTags from '../../shared/MetaTags';

export const Blogs = (props) => {
	const dispatch = useDispatch();
	const blogs = useSelector((state) => state.blog.blogs);
	const featuredBlog = useSelector((state) => state.blog.featuredBlog);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		dispatch(getBlogs());
		dispatch(getFeaturedBlog());
	}, []);

	useEffect(() => {
		if (blogs.results !== undefined && blogs.results.length !== 0) {
			setIsLoading(false);
		}
	}, [blogs]);

	const loadPages = (pageNumber) => {
		getBlogs(pageNumber);
	};

	return (
		<div className='mt-4 min-vh-100'>
			<MetaTags
				description={
					'Welcome to MacroBros blog. From here you can search for a particular topic of interest, choose' +
					' from one of our categories or possibly read one of our top blog posts as voted by our users'
				}
				title={'Blogs'}
			/>
			{isLoading ? null : (
				<div className='container-fluid'>
					<Link
						to={`/blog/${featuredBlog.slug}`}
						style={{ textDecoration: 'none', color: 'white' }}
					>
						<Jumbotron
							className='d-flex flex-column justify-content-end align-items-start pb-2'
							style={{
								backgroundImage: `url( ${featuredBlog.headerImg} )`,
								backgroundSize: '100% 100%',
								height: '100%',
								minHeight: '400px'
							}}
						>
							<h1>{featuredBlog.title}</h1>
							<p>{featuredBlog.excerpt}</p>
						</Jumbotron>
					</Link>
				</div>
			)}
			<div className='container-fluid pt-3'>
				<div className='row'>
					<div className='col-md-9'>
						{isLoading ? (
							<LoadingSpinner isLoading={isLoading} />
						) : (
							<BlogGridBuilder blogs={blogs.results} />
						)}
					</div>
					<div className='col-md-3'>
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

export default Blogs;
