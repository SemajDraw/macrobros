import fetch from 'isomorphic-unfetch';

export const fetcher = async (url: string, config?: RequestInit): Promise<any> => {
	const res = await fetch(url, config);
	return res.json();
};
