import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import Layout from '../components/Layout';
import fetcher from '../lib/fetcher';
import 'focus-visible/dist/focus-visible';
import theme from '../styles/theme';
import '../styles/globals.scss';
import AuthProvider from '../providers/AuthProvider';

export const App = ({ Component, pageProps }: any) => {
	const store = useStore(pageProps.initialReduxState);
	const persistor = persistStore(store, {}, () => {
		persistor.persist();
	});

	return (
		<SWRConfig value={{ fetcher }}>
			<Provider store={store}>
				<PersistGate loading={<div>loading</div>} persistor={persistor}>
					<ChakraProvider theme={theme}>
						<AuthProvider>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</AuthProvider>
					</ChakraProvider>
				</PersistGate>
			</Provider>
		</SWRConfig>
	);
};

export default App;
