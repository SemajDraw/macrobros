import React, { FC } from 'react';
import { css } from '@emotion/react';
import GridLoader from 'react-spinners/GridLoader';
import { Box } from '@chakra-ui/react';

const override = css`
	display: block;
	margin: 0 auto;
`;

interface LoadingSpinnerProps {
	isLoading: boolean;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ isLoading }) => (
	<Box>
		<GridLoader css={override} size={20} color={'#471c71'} loading={isLoading} />
	</Box>
);
