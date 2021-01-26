import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import '../styles/globals.scss';
import { SWRConfig } from 'swr';
import axios from 'axios';
import 'focus-visible/dist/focus-visible';

const fetcher = (resource, init) =>
	axios(resource, init).then((res) => res.data);

export const App = ({ Component, pageProps }) => {
	const store = useStore(pageProps.initialReduxState);
	const persistor = persistStore(store, {}, () => {
		persistor.persist();
	});

	return (
		<SWRConfig value={{ fetcher }}>
			<Provider store={store}>
				<PersistGate loading={<div>loading</div>} persistor={persistor}>
					<ChakraProvider resetCSS={true} theme={theme}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ChakraProvider>
				</PersistGate>
			</Provider>
		</SWRConfig>
	);
};

export default App;
