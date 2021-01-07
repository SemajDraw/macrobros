import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import './SideBar.scss';
import SearchBar from './SearchBar';
import {
	getBlogCategories,
	getPopularBlogs
} from '../../../../actions/blog/blog';
import { animated, useSprings } from 'react-spring';
import { formatPageHeading } from '../../../../utils/stringUtils';

export const SideBar = (props) => {
	const popularBlogs = useSelector((state) => state.blog.popularBlogs);
	const blogCategories = useSelector((state) => state.blog.blogCategories);
	const dispatch = useDispatch();

	const calc = (x, y) => [
		(y - window.innerHeight / 2) / 20,
		-(x - window.innerWidth / 2) / 20,
		1.02
	];
	const trans = (x, y, s) => `perspective(100px) scale(${s})`;
	const [popularSprings, setPopular] = useSprings(popularBlogs.length, () => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 40 }
	}));
	const [categoriesSprings, setCategories] = useSprings(
		blogCategories.length,
		() => ({
			xys: [0, 0, 1],
			config: { mass: 5, tension: 350, friction: 40 }
		})
	);

	useEffect(() => {
		dispatch(getPopularBlogs());
		dispatch(getBlogCategories());
	}, []);

	const popularBlogsList = (popularBlogs) => {
		return popularBlogs.map((blogPost, i) => {
			return (
				<animated.li
					key={i}
					className='list-group-item text-truncate text-format'
					onMouseMove={({ clientX: x, clientY: y }) =>
						setPopular((index) => {
							if (index !== i) return;
							return { xys: calc(x, y) };
						})
					}
					onMouseLeave={() => setPopular({ xys: [0, 0, 1] })}
					style={{
						transform: popularSprings[i].xys.interpolate(trans)
					}}
				>
					<img className='categories-icon mr-2' src={blogPost.icon} alt={''} />
					<Link to={`/blog/${blogPost.slug}`}>{blogPost.title}</Link>
				</animated.li>
			);
		});
	};

	const categoriesList = () => {
		return blogCategories.map((category, i) => {
			return (
				<animated.a
					key={i}
					className='list-group-item p-s text-muted text-truncate text-format'
					href={`/blog/category/${category}`}
					onMouseMove={({ clientX: x, clientY: y }) =>
						setCategories((index) => {
							if (index !== i) return;
							return { xys: calc(x, y) };
						})
					}
					onMouseLeave={() => setCategories({ xys: [0, 0, 1] })}
					style={{
						transform: categoriesSprings[i].xys.interpolate(trans)
					}}
				>
					{formatPageHeading(category)}
				</animated.a>
			);
		});
	};

	return (
		<>
			{props.showSearch ? (
				<SearchBar props={props.props} />
			) : (
				<div className='mt-5 pt-2' />
			)}

			<div className='col-12 px-0'>
				<div className='list-group list-container' id='list-tab' role='tablist'>
					<a
						className='categories-dropdown-btn list-group-item list-group-item-action drop d-flex justify-content-between my-auto align-items-center'
						id='list-home-list'
						data-toggle='collapse'
						href='#collapseCategories'
						aria-expanded='false'
						aria-controls='collapseCategories'
					>
						Categories
						<FontAwesomeIcon icon={faAngleDown} />
					</a>
					<div
						className='collapse'
						id='collapseCategories'
						aria-labelledby='collapseCategories'
					>
						{categoriesList()}
					</div>
				</div>
			</div>
			<div className='col-12 pl-2 mt-3'>
				<h4 className='text-truncate'>Popular blogs</h4>
			</div>
			<div className='list-container col-12 px-0 mt-1'>
				<ul className='list-group list-group-flush'>
					{popularBlogsList(popularBlogs)}
				</ul>
			</div>
		</>
	);
};

export default SideBar;
