import React from 'react';
import LoadingPage from './shared/Loading/LoadingPage';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist/es/types';

type Props = {
	persistor: Persistor;
};

/**
 * SSR aware persist gate
 * @param props Same as the original PersistGate
 * @returns persisted or un-persisted component
 */
export const PersistGateSSR: React.FC<Props> = ({ children, persistor }) => {
	if (!process.browser) {
		return <>{children}</>;
	} else {
		return (
			<PersistGate
				loading={<LoadingPage background={'rgba(0, 0, 0, 0.03)'} icon={'#191919'} />}
				persistor={persistor}
			>
				{children}
			</PersistGate>
		);
	}
};
