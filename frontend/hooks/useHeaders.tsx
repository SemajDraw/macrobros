interface Headers {
	headers: {
		[key: string]: string;
	};
}

export const tokenAuthHeaders = (token: string): Headers => {
	const headers = baseHeaders();
	if (token) {
		headers.headers['Authorization'] = `Token ${token}`;
	}
	return headers;
};

export const baseHeaders = (): Headers => {
	return { headers: { 'Content-Type': 'application/json' } } as Headers;
};
