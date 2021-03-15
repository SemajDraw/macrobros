import React, { FC } from 'react';
import { IconButton } from '@chakra-ui/button';
import { CopyIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import { useClipboard } from '@chakra-ui/hooks';

interface CopyButtonProps {
	address: string;
}

export const CopyButton: FC<CopyButtonProps> = ({ address }) => {
	const { hasCopied, onCopy } = useClipboard(address);

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
				onClick={onCopy}
				ml={2}
				color='blue.400'
				_hover={{ color: 'blue.600' }}
				icon={<CopyIcon />}
			/>
		</Tooltip>
	);
};

export default CopyButton;
