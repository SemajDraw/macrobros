interface Headers {
	headers: {
		[key: string]: string;
	};
}

export const tokenAuthHeaders = (token: string) => {
	const headers = baseHeaders();
	if (token) {
		headers.headers['Authorization'] = `Token ${token}`;
	}
	return headers;
};

export const baseHeaders = () => {
	return { headers: { 'Content-Type': 'application/json' } } as Headers;
};
