import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
	colors: {
		linkOrange: '#ffae00',
		layoutBlack: '#191919',
		gradientPurple: {
			100: '#471c71',
			200: 'rgba(71,28,113,0.84)'
		},
		gradientOrange: '#FFAF7B'
	},
	fonts: {
		body:
			'"Roboto", "Lucida Grande", "DejaVu Sans", "Bitstream Vera Sans", Verdana, Arial, sans-serif'
	}
});

export default theme;
