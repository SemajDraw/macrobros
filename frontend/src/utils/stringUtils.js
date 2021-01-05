export const formatPageHeading = (word) => {
	if (word) {
		if (word.includes('-')) {
			return word
				.split('-')
				.map((word) => formatPageHeading(word))
				.join(' ');
		}
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
	return '';
};

export const formatUserInitials = (names) => {
	return names.map((name) => name[0].toUpperCase() + ' ');
};
