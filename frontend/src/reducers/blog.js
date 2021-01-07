import {
	CLAP_BLOG,
	GET_BLOG,
	GET_BLOG_CATEGORIES,
	GET_BLOGS,
	GET_CATEGORY_BLOGS,
	GET_FEATURED_BLOG,
	GET_POPULAR_BLOGS,
	SEARCH_BLOGS
} from '../actions/blog/types';
import PaginatedBlogModel from '../actions/blog/PaginatedBlogModel';
import BlogPostModel from '../actions/blog/BlogPostModel';

const initialState = {
	blog: new BlogPostModel(),
	blogCategories: [],
	featuredBlog: new BlogPostModel(),
	popularBlogs: [],
	blogs: new PaginatedBlogModel(),
	categoryBlogs: new PaginatedBlogModel(),
	searchBlogs: {},
	blogClapped: ''
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_BLOG:
			return {
				...state,
				blog: action.payload
			};
		case CLAP_BLOG:
			return {
				...state,
				blogClapped: action.payload
			};
		case GET_BLOG_CATEGORIES:
			return {
				...state,
				blogCategories: action.payload
			};
		case GET_BLOGS:
			return {
				...state,
				blogs: action.payload
			};
		case GET_CATEGORY_BLOGS:
			return {
				...state,
				categoryBlogs: action.payload
			};
		case GET_FEATURED_BLOG:
			return {
				...state,
				featuredBlog: action.payload
			};
		case GET_POPULAR_BLOGS:
			return {
				...state,
				popularBlogs: action.payload
			};
		case SEARCH_BLOGS:
			return {
				...state,
				searchBlogs: action.payload
			};
		default:
			return state;
	}
}
