import axios from 'axios';
import { baseHeaders } from '../../hooks/useHeaders';
import { apiUrl } from '../../utils/stringUtils';

export const sendEmail = (email: any) => {
	return axios.post(apiUrl('/api/contact/email'), email, baseHeaders());
};
