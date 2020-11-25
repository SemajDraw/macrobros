import axios from "axios";
import {createError} from "../alerts/errors/errors";
import {EMAIL_SENT} from "./types";


export const sendEmail = (email) => {
    return axios.post('/api/contact/email', email,{headers: {'Content-Type': 'application/json'}});
};