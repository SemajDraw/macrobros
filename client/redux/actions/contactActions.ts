import Axios, { AxiosResponse } from 'axios';
import { baseHeaders } from '../../hooks/useHeaders';
import { apiUrl } from '../../utils/stringUtils';
import { ContactEmail } from '../../models/ContactEmail';

interface SendEmailResponse {
	internal: string[];
}

export const sendEmail = (
	email: ContactEmail
): Promise<AxiosResponse<SendEmailResponse>> => {
	return Axios.post<SendEmailResponse>(apiUrl('/api/contact/email'), email, baseHeaders());
};
