import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
	initialColorMode: 'light',
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
	},
	components: {
		Popover: {
			Popover: {
				parts: ['popper'],
				baseStyle: (props: any) => ({
					popper: {
						zIndex: 10,
						maxW: props.width ? props.width : 'xs',
						w: '100%'
					}
				})
			}
		}
	}
});

export default theme;
