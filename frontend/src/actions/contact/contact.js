import axios from "axios";

export const sendEmail = (email) => {
    return axios.post('/api/contact/email', email, { headers: { 'Content-Type': 'application/json' } });
};