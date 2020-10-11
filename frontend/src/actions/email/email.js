import axios from "axios";
import {createError} from "../alerts/errors/errors";
import {EMAIL_VERIFICATION} from "./types";

export const verifyEmail = (token) => (dispatch) => {
    console.log('token', token);
    axios.post('/api/account/auth/verify-email', null, tokenAuthConfig(token))
        .then(res => {
            console.log('verifyemailres', res);
            dispatch({
                type: EMAIL_VERIFICATION,
                payload: res.data
            });
        }).catch(err => {
            console.log('error', err);
        dispatch(createError(err.response.data, err.response.status));
    });
};

const tokenAuthConfig = (token) => {
    // Set headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // If token, add to Authorization navbar
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    console.log('cnfig', config)
    return config;
};