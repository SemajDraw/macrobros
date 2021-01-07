export const Blog = {
	BLOGS: '/blog',
	BLOG_DETAILS: '/blog/:slug',
	BLOG_CATEGORIES: '/blog/category/:category',
	BLOG_SEARCH: '/blog/search/results'
};

export const Account = {
	LOGIN: '/account/login',
	REGISTER: '/account/register',
	EMAIL_VERIFICATION: '/account/verify-email/:token',
	PASSWORD_RESET: '/account/password-reset',
	FORGOT_PASSWORD: '/account/forgot-password',
	PROFILE: '/account/profile',
	PROFILE_SETTINGS: '/account/profile/settings'
};

export const Common = {
	FORM_SUBMIT: '/submit/:form'
};

export const ContactR = {
	CONTACT: '/contact'
};

export const TermsConditions = {
	TERMS_SERVICE: '/terms-conditions/terms-of-service',
	PRIVACY_POLICY: '/terms-conditions/privacy-policy'
};
