import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import '../styles/globals.scss';

export const App = ({ Component, pageProps }) => {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<ChakraProvider theme={theme} resetCSS={true}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</Provider>
	);
};

export default App;
