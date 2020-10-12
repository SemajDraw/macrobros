export const tokenAuthHeaders = (token) => {
    // Set headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // If token, add to Authorization navbar
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};
