import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import { reduxWrapper } from '../redux/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../components/Layout';
import fetcher from '../lib/fetcher';
import LoadingPage from '../components/shared/Loading/LoadingPage';
import theme from '../styles/theme';
import 'focus-visible/dist/focus-visible';
import '../styles/globals.scss';
import AppContainer from '../components/AppContainer';
import AuthProvider from '../providers/AuthProvider';

export const App = ({ Component, pageProps }: any) => {
	// @ts-ignore
	const store = useStore((state) => state);

	return (
		<SWRConfig value={{ fetcher }}>
			<PersistGate
				loading={<LoadingPage />}
				persistor={(store as any).__persistor}
			>
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
		</SWRConfig>
	);
};

export default reduxWrapper.withRedux(App);
