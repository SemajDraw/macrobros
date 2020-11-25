import axios from "axios";
import {createError} from "../alerts/errors/errors";
import {EMAIL_VERIFICATION, GET_SAVED_BLOGS, PASSWORD_RESET, SAVE_BLOG} from "./types";
import {tokenAuthHeaders} from "../authHeaders";
import {AUTH_ERROR} from "../auth/types";

export const register = (registerObj) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios.post('/api/account/auth/register', JSON.stringify(registerObj), config);
};

export const verifyEmail = (token) => (dispatch) => {
    axios.post('/api/account/auth/verify-email', null, tokenAuthHeaders(token))
        .then(res => {
            dispatch({
                type: EMAIL_VERIFICATION,
                payload: res.data
            });
        }).catch(err => {
        dispatch(createError(err.response.data, err.response.status));
    });
};

export const passwordResetRequest = (resetReq) => {
    return axios.post('/api/account/password-reset-request', resetReq);
};

export const passwordReset = (user, token, password, password1) => (dispatch) => {
    axios.post('/api/account/password-reset',
        {
            "token": token,
            "password": password,
            "password1": password1
        },
        tokenAuthHeaders(user)
    ).then(res => {
        dispatch({
            type: PASSWORD_RESET,
            payload: res.data
        });
    }).catch(err => {
        dispatch(createError(err.response.data, err.response.status));
    });
};

export const getSavedBlogs = () => (dispatch, getState) => {
    axios.get('/api/account/saved-blogs', tokenAuthHeaders(getState().auth.token))
        .then(res => {
            dispatch({
                type: GET_SAVED_BLOGS,
                payload: res.data
            });
        }).catch(err => {
        dispatch(createError(err.response.data, err.response.status));
        dispatch({type: AUTH_ERROR});
    });
};

export const saveBlog = (blogId) => (dispatch, getState) => {
    axios.put('/api/account/save-blog', {blogId: blogId}, tokenAuthHeaders(getState().auth.token))
        .then(res => {
            dispatch({
                type: SAVE_BLOG,
                payload: res.data
            })
        }).catch(err => dispatch(createError(err.response.data, err.response.status)));
};