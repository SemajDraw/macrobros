import axios, { AxiosResponse } from 'axios';
import { baseHeaders } from '../../hooks/useHeaders';
import { apiUrl } from '../../utils/stringUtils';
import { ContactFormEmail } from '../../models/ContactFormEmail';

interface SendEmailResponse {
	internal: string[];
}

export const sendEmail = (email: ContactFormEmail): Promise<AxiosResponse<SendEmailResponse>> => {
	return axios.post<SendEmailResponse>(apiUrl('/api/contact/email'), email, baseHeaders());
};
