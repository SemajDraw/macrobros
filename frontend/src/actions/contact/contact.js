import axios from "axios";
import {createError} from "../alerts/errors/errors";
import {EMAIL_SENT} from "./types";


export const sendEmail = (email) => (dispatch) => {
    axios.post('/api/contact/email',
        email,
        {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            dispatch({
                type: EMAIL_SENT,
                payload: res.data
            })
        }).catch(err => dispatch(createError(err.response.data, err.response.status)));
};