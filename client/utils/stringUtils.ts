import { BASE_URL } from '../constants/endpoints';

export const formatSlug = (word: string): string => {
	if (word) {
		if (word.includes('-')) {
			return word
				.split('-')
				.map((word: string) => formatSlug(word))
				.join(' ');
		}
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
	return '';
};

export const formatUserInitials = (names: string[]) => {
	return names.map((name) => name[0].toUpperCase()).join(' ');
};

export const apiUrl = (url: string) => {
	return `${BASE_URL}${url}`;
};

export const paginateUrl = (url: string, pageNumber) => {
	return pageNumber ? `${url}?page=${pageNumber}` : url;
};
