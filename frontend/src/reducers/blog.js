import {GET_BLOGS, GET_FEATURED_BLOG} from "../actions/blogs/types";

const initialState = {
    blogs: [],
    featuredBlog: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
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