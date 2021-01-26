import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/color-mode';
import theme from '../styles/theme';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700|Lexend+Zetta:100,200,300,400,500,700|Open+Sans:100,200,300,400,500,700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
