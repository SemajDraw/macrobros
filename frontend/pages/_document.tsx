import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/color-mode';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='shortcut icon' type='image/png' href='/favicon.png' />
					<link
						href='https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700|Lexend+Zetta:100,200,300,400,500,700|Open+Sans:100,200,300,400,500,700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={'light'} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
