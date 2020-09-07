import {GET_BLOG, GET_BLOGS, GET_CATEGORY_BLOGS, GET_FEATURED_BLOG} from "./types";
import axios from "axios";
import {createError} from "../alerts/errors/errors";

export const getBlog = (slug) => (dispatch) => {
    axios.get(`/api/blog/${slug}`)
        .then(res => {
            dispatch({
                type: GET_BLOG,
                payload: res.data
            })
        }).catch(err => dispatch(createError(err.response.data, err.response.status)));
};

export const getFeaturedBlog = () => (dispatch) => {
    axios.get('/api/blog/featured')
        .then(res => {
            dispatch({
                type: GET_FEATURED_BLOG,
                payload: res.data[0]
            });
        }).catch(err => dispatch(createError(err.response.data, err.response.status)));
};

export const getBlogs = () => (dispatch) => {
    axios.get('/api/blog/')
        .then(res => {
            dispatch({
                type: GET_BLOGS,
                payload: res.data
            });
        }).catch(err => dispatch(createError(err.response.data, err.response.status)));
};

export const getCategoryBlogs = (category) => (dispatch) => {
    axios.post('/api/blog/category',
        {category: category},
        {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            dispatch({
                type: GET_CATEGORY_BLOGS,
                payload: res.data
            })
        }).catch(err => dispatch(createError(err.response.data, err.response.status)));
};
