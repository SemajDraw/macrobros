import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useStore } from '../redux/Store';
import { Layout } from '../components/Layout';
import theme from '../styles/theme';
import 'focus-visible/dist/focus-visible';
import '../styles/globals.scss';
import { AppContainer } from '../components/AppContainer';
import { AuthProvider } from '../providers/AuthProvider';
import { AppProps } from 'next/app';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGateSSR } from '../components/PersistGateSSR';

export const App: FC<AppProps> = ({ Component, pageProps }) => {
	const store = useStore(pageProps.initialReduxState);
	const persistor = persistStore(store, {}, function () {
		persistor.persist();
	});

	return (
		<ChakraProvider theme={theme}>
			<Provider store={store}>
				<PersistGateSSR persistor={persistor}>
					<AuthProvider>
						<AppContainer>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</AppContainer>
					</AuthProvider>
				</PersistGateSSR>
			</Provider>
		</ChakraProvider>
	);
};

export default App;
