import { useCookies } from 'react-cookie';

export const useCookie = ({ cookieKey }: any) => {
	const [cookie, setCookie, removeCookie] = useCookies([cookieKey]);

	return {
		cookie,
		setCookie,
		removeCookie
	};
};
