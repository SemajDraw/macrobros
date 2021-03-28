export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const ACCOUNT = {
	REGISTER: `${BASE_URL}/account/auth/register`,
	VERIFY_EMAIL: `${BASE_URL}/account/auth/verify-email`,
	PASSWORD_RESET_REQUEST: `${BASE_URL}/account/password-reset-request`,
	PASSWORD_RESET: `${BASE_URL}/account/password-reset`,
	SAVED_BLOGS: `${BASE_URL}/account/auth/saved-blogs`,
	SAVE_BLOG: `${BASE_URL}/account/auth/save-blog`,
	UPDATE_ACCOUNT: `${BASE_URL}/account/auth/update-user`
};

export const AUTH = {
	LOAD_USER: `${BASE_URL}/account/auth/user`,
	LOGIN: `${BASE_URL}/account/auth/login`,
	LOGOUT: `${BASE_URL}/account/auth/logout`
};

export const BLOG = {
	BLOGS: `${BASE_URL}/blog/`,
	CATEGORIES: `${BASE_URL}/blog/categories`,
	CATEGORY: `${BASE_URL}/blog/category`,
	FEATURED: `${BASE_URL}/blog/featured`,
	POPULAR: `${BASE_URL}/blog/popular`,
	POPULAR_MIN: `${BASE_URL}/blog/popular-min`,
	ADD_CLAP: `${BASE_URL}/blog/add-clap`
};

export const POLICIES = {
	TERMS_OF_SERVICE: `${process.env.API_BASE_URL}/terms-conditions/terms-service`,
	PRIVACY_POLICY: `${process.env.API_BASE_URL}/terms-conditions/privacy-policy`
};

export const SEARCH = {
	BLOGS: `${BASE_URL}/blog/search`
};

export const CONTACT = {
	CONTACT_EMAIL: `${BASE_URL}/contact/email`
};
