export const formatHeader = (word) => {
    if (word) {
        if (word.includes('-')) {
            return word.split('-').map((word) => formatHeader(word)).join(' ');
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return '';
}

export default formatHeader;