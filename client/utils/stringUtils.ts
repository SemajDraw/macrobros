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
	return names.map((name) => name[0].toUpperCase() + ' ');
};
