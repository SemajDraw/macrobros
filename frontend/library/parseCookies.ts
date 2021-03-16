import cookie from 'cookie';
import { IncomingMessage } from 'http';

export const parseCookie = (
	req: IncomingMessage & {
		cookies?: { [key: string]: any };
	}
) => {
	return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
};
