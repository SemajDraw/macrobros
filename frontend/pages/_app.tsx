import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useStore } from '../redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from '../components/Layout';
import LoadingPage from '../components/shared/Loading/LoadingPage';
import theme from '../styles/theme';
import 'focus-visible/dist/focus-visible';
import '../styles/globals.scss';
import { AppContainer } from '../components/AppContainer';
import { AuthProvider } from '../providers/AuthProvider';
import { AppProps } from 'next/app';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

export const App: FC<AppProps> = ({ Component, pageProps }) => {
	const store = useStore(pageProps.initialReduxState);
	const persistor = persistStore(store, {}, function () {
		persistor.persist();
	});

	return (
		<Provider store={store}>
			<PersistGate loading={<LoadingPage />} persistor={persistor}>
				<ChakraProvider theme={theme}>
					<AuthProvider>
						<AppContainer>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</AppContainer>
					</AuthProvider>
				</ChakraProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
