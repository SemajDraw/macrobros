import axios from 'axios';
import { baseHeaders } from '../../hooks/useHeaders';

export const sendEmail = (email) => {
	return axios.post('/api/contact/email', email, baseHeaders());
};
