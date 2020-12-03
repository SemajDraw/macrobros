import axios from "axios";
import { EMAIL_VERIFICATION, GET_SAVED_BLOGS, PASSWORD_RESET, SAVE_BLOG, UPDATE_ACCOUNT } from "./types";
import { tokenAuthHeaders } from "../authHeaders";
import { AUTH_ERROR, CLOSE_ACCOUNT } from "../auth/types";

export const register = (registerObj) => {

    return axios.post('/api/account/auth/register', JSON.stringify(registerObj));
};

export const verifyEmail = (token) => (dispatch) => {
    axios.post('/api/account/auth/verify-email', null, tokenAuthHeaders(token))
        .then(res => {
            dispatch({
                type: EMAIL_VERIFICATION,
                payload: res.data
            });
        }).catch();
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
    }).catch();
};

export const getSavedBlogs = () => (dispatch, getState) => {
    axios.get('/api/account/saved-blogs', tokenAuthHeaders(getState().auth.token))
        .then(res => {
            dispatch({
                type: GET_SAVED_BLOGS,
                payload: res.data
            });
        }).catch(err => {
        dispatch({ type: AUTH_ERROR });
    });
};

export const saveBlog = (blogId) => (dispatch, getState) => {
    axios.put('/api/account/save-blog', { blogId: blogId }, tokenAuthHeaders(getState().auth.token))
        .then(res => {
            dispatch({
                type: SAVE_BLOG,
                payload: res.data
            })
        }).catch();
};

export const updateAccount = (updateField) => (dispatch, getState) => {
    axios.put('/api/account/auth/update-user', updateField, tokenAuthHeaders(getState().auth.token))
        .then(res => {
            'closed' in res.data ? dispatch({ type: CLOSE_ACCOUNT }) : dispatch({ type: UPDATE_ACCOUNT });
        }).catch();
};