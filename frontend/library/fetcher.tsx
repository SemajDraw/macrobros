import fetch from 'isomorphic-unfetch';

export const fetcher = async (url: string): Promise<any> => {
	const res = await fetch(url);
	return res.json();
};
