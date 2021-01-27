export const tokenAuthHeaders = (token: string) => {
	// Set headers
	const config = baseHeaders();
	// If token, add to Authorization navbar
	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	}
	return config;
};

export const baseHeaders = () => {
	return {
		headers: {
			'Content-Type': 'application/json'
		}
	};
};
