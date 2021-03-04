export const BASE_URL = 'http://127.0.0.1:8000';

export const BLOG = {
	BLOGS: `${BASE_URL}/api/blog/`,
	CATEGORIES: `${BASE_URL}/api/blog/categories`,
	CATEGORY: `${BASE_URL}/api/blog/category`,
	FEATURED: `${BASE_URL}/api/blog/featured`,
	POPULAR: `${BASE_URL}/api/blog/popular`,
	ADD_CLAP: `${BASE_URL}/api/blog/add-clap`
};

export const POLICIES = {
	TERMS_OF_SERVICE: `${BASE_URL}/api/terms-conditions/terms-service`,
	PRIVACY_POLICY: `${BASE_URL}/api/terms-conditions/privacy-policy`
};

export const SEARCH = {
	BLOGS: `${BASE_URL}/api/blog/search`
};
