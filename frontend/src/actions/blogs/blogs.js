import {GET_BLOGS, GET_FEATURED_BLOG} from "./types";
import axios from "axios";
import {createError} from "../alerts/errors/errors";

export const getBlogs = () => (dispatch) => {
    dispatch({type: GET_BLOGS});

    axios.get('/api/blog/')
        .then(res => {
            dispatch({
                type: GET_BLOGS,
                payload: res.data
            });
        }).catch(err => {
        dispatch(createError(err.response.data, err.response.status));
    });
};

export const getFeaturedBlog = () => (dispatch) => {
    dispatch({type: GET_FEATURED_BLOG});

    axios.get('/api/blog/featured')
        .then(res => {
            dispatch({
                type: GET_FEATURED_BLOG,
                payload: res.data[0]
            });
        }).catch(err => {
        dispatch(createError(err.response.data, err.response.status));
    });
};