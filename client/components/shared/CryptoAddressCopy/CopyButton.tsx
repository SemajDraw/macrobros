import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { CopyIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';

export const CopyButton = ({ address, hasCopied, onCopy, setValue }) => {
	return (
		<Tooltip
			hasArrow
			closeDelay={500}
			label={hasCopied ? 'Copied' : 'Copy'}
			bg='blue.400'
			color='white'
			placement='top'
		>
			<IconButton
				aria-label={'copy-button'}
				variant='link'
				onClick={() => {
					setValue(address);
					onCopy();
				}}
				ml={2}
				color='blue.400'
				_hover={{ color: 'blue.600' }}
				icon={<CopyIcon />}
			/>
		</Tooltip>
	);
};

export default CopyButton;
