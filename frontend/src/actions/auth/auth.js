import axios from 'axios';
import { createError } from '../alerts/errors/errors'
import { tokenAuthHeaders } from "../authHeaders";

import { AUTH_ERROR, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING } from './types';

export const loadUser = () => (dispatch, getState) => {
    // Initialize User Load
    dispatch({ type: USER_LOADING });

    axios.get('/api/account/auth/user', tokenAuthHeaders(getState().auth.token))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(createError(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
        });
};

export const login = (loginReq) => {
    // Set headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios.post('/api/account/auth/login', JSON.stringify(loginReq), config);
};

export const logout = () => (dispatch, getState) => {
    axios.post('/api/account/auth/logout', null, tokenAuthHeaders(getState().auth.token))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch(err => {
            dispatch(createError(err.response.data, err.response.status));
        });
};
