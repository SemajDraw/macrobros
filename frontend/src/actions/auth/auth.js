import axios from 'axios';
import {createError} from '../alerts/errors/errors'

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from './types';


export const loadUser = () => (dispatch, getState) => {
    // Initialize User Load
    dispatch({type: USER_LOADING});

    axios.get('/api/account/auth/user', tokenAuthConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
        dispatch(createError(err.response.data, err.response.status));
        dispatch({type: AUTH_ERROR});
    });
};

export const login = (email, password) => dispatch => {

    // Set headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.post('/api/account/auth/login', JSON.stringify({email, password}), config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        dispatch(createError(err.response.data, err.response.status));
        dispatch({type: LOGIN_FAIL});
    });
};

export const logout = () => (dispatch, getState) => {
    axios.post('/api/account/auth/logout', null, tokenAuthConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {
        dispatch(createError(err.response.data, err.response.status));
    });
};

export const register = (registerObj) => dispatch => {

    // Set headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.post('/api/account/auth/register', JSON.stringify(registerObj), config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        dispatch(createError(err.response.data, err.response.status));
        dispatch({type: REGISTER_FAIL});
    });
};

export const tokenAuthConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token;
    // Set headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // If token, add to Authorization header
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};