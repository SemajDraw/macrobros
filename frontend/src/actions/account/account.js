import axios from "axios";
import {createError} from "../alerts/errors/errors";
import {EMAIL_VERIFICATION, PASSWORD_RESET} from "./types";
import {tokenAuthHeaders} from "../authHeaders";

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