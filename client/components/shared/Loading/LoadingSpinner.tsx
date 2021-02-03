import React, { useState } from 'react';
import { css } from '@emotion/react';
import GridLoader from 'react-spinners/GridLoader';
import { Box } from '@chakra-ui/react';

const override = css`
	display: block;
	margin: 0 auto;
`;

export const LoadingSpinner = (props: any) => {
	const { isLoading } = props;

	return (
		<Box>
			<GridLoader css={override} size={20} color={'#471c71'} loading={isLoading} />
		</Box>
	);
};

export default LoadingSpinner;
