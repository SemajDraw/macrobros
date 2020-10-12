import axios from "axios";
import {createError} from "../alerts/errors/errors";
import {EMAIL_VERIFICATION} from "./types";
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