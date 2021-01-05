import axios from 'axios';
import { baseHeaders } from '../headers';

export const sendEmail = (email) => {
	return axios.post('/api/contact/email', email, baseHeaders());
};
