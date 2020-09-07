import {GET_BLOG, GET_BLOGS, GET_CATEGORY_BLOGS, GET_FEATURED_BLOG} from "../actions/blogs/types";

const initialState = {
    blog: {},
    blogs: [],
    categoryBlogs: [],
    featuredBlog: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BLOG:
            return {
                ...state,
                blog: action.payload
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
        default:
            return state
    }
}