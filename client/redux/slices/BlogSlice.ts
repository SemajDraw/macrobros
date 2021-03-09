import { Blog } from '../../models/Blog';
import { PaginatedBlog } from '../../models/PaginatedBlog';
import { PopularBlog } from '../../models/PopularBlog';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../RootReducer';
import { BlogMin } from '../../models/BlogMin';

interface BlogState {
	blog: Blog;
	blogs: PaginatedBlog;
	blogCategories: string[];
	categoryBlogs: PaginatedBlog;
	featuredBlog: BlogMin;
	popularBlogs: PopularBlog[];
	searchBlogs: PaginatedBlog;
}

const slice = createSlice({
	name: 'blog',
	initialState: {
		blog: {} as Blog,
		blogCategories: [],
		featuredBlog: {} as Blog,
		popularBlogs: [],
		blogs: {} as PaginatedBlog,
		categoryBlogs: {} as PaginatedBlog,
		searchBlogs: {} as PaginatedBlog
	} as BlogState,
	reducers: {
		updateBlog(state, { payload }: PayloadAction<Blog>) {
			state.blog = payload;
		},
		updateFeaturedBlog(state, { payload }: PayloadAction<BlogMin>) {
			state.featuredBlog = payload;
		},
		updateBlogs(state, { payload }: PayloadAction<PaginatedBlog>) {
			state.blogs = payload;
		},
		updateCategoryBlogs(state, { payload }: PayloadAction<PaginatedBlog>) {
			state.categoryBlogs = payload;
		},
		updatePopularBlogs(state, { payload }: PayloadAction<PopularBlog[]>) {
			state.popularBlogs = payload;
		},
		updateSearchBlogs(state, { payload }: PayloadAction<PaginatedBlog>) {
			state.searchBlogs = payload;
		},
		updateBlogCategories(state, { payload }: PayloadAction<string[]>) {
			state.blogCategories = payload;
		}
	}
});

export const blogReducer = slice.reducer;

export const {
	updateBlog,
	updateFeaturedBlog,
	updateBlogCategories,
	updateBlogs,
	updateCategoryBlogs,
	updatePopularBlogs,
	updateSearchBlogs
} = slice.actions;

const selectFeaturedBlog = (state: State): BlogMin => state.blog.featuredBlog;
const selectBlogs = (state: State): PaginatedBlog => state.blog.blogs;
const selectSearchBlogs = (state: State): PaginatedBlog => state.blog.searchBlogs;
const selectCategoryBlogs = (state: State): PaginatedBlog => state.blog.categoryBlogs;

export const blogsSelector = createSelector([selectBlogs], (selectBlogs) => selectBlogs);

export const featuredBlogSelector = createSelector(
	[selectFeaturedBlog],
	(selectFeaturedBlog) => selectFeaturedBlog
);

export const searchBlogsSelector = createSelector(
	[selectSearchBlogs],
	(selectSearchBlogs) => selectSearchBlogs
);

export const categoryBlogsSelector = createSelector(
	[selectCategoryBlogs],
	(selectCategoryBlogs) => selectCategoryBlogs
);
