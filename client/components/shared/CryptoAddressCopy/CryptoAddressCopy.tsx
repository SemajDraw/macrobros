import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import CopyButton from './CopyButton';
import { useClipboard } from '@chakra-ui/hooks';

export const CryptoAddressCopy = ({ blockchain, address }) => {
	const [value, setValue] = useState('');
	const { hasCopied, onCopy } = useClipboard(value);

	return (
		<Flex mt={2} justifyContent='center' mx={6}>
			<Text fontWeight={600}>{blockchain}: </Text>
			<Text ml={1} isTruncated>
				{address}
			</Text>
			<CopyButton
				address={address}
				hasCopied={hasCopied}
				onCopy={onCopy}
				setValue={setValue}
			/>
		</Flex>
	);
};

export default CryptoAddressCopy;
