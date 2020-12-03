import axios from 'axios';

import { AUTH_ERROR, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING } from './types';
import { baseHeaders, tokenAuthHeaders } from "../headers";

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
            dispatch({ type: AUTH_ERROR });
        });
};

export const login = (loginReq) => {

    return axios.post('/api/account/auth/login', JSON.stringify(loginReq), baseHeaders());
};

export const logout = () => (dispatch, getState) => {
    axios.post('/api/account/auth/logout', null, tokenAuthHeaders(getState().auth.token))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch();
};
