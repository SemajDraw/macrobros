import {
    EMAIL_VERIFICATION,
    GET_SAVED_BLOGS,
    PASSWORD_RESET,
    SAVE_BLOG,
    UPDATE_ACCOUNT
} from "../actions/account/types";
import PaginatedBlog from "../actions/blog/PaginatedBlog";

const initialState = {
    emailVerification: {
        emailVerified: false,
        message: []
    },
    passwordReset: null,
    savedBlogs: new PaginatedBlog(),
    saveBlog: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case EMAIL_VERIFICATION:
            return {
                ...state,
                emailVerification: action.payload
            };
        case PASSWORD_RESET:
            return {
                ...state,
                passwordReset: action.payload
            }
        case GET_SAVED_BLOGS:
            return {
                ...state,
                savedBlogs: action.payload
            };
        case SAVE_BLOG:
            return {
                ...state,
                saveBlog: action.payload
            }
        case UPDATE_ACCOUNT:
            return {
                ...state
            }
        default:
            return state
    }
}