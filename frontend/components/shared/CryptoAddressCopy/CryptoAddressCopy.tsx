import React, { FC } from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import CopyButton from './CopyButton';

interface CryptoAddressCopyProps {
	blockchain: string;
	address: string;
}

export const CryptoAddressCopy: FC<CryptoAddressCopyProps> = ({
	blockchain,
	address
}) => {
	return (
		<Flex mt={2} justifyContent='center' mx={6}>
			<Text fontWeight={600}>{blockchain}: </Text>
			<Text ml={1} isTruncated>
				{address}
			</Text>
			<CopyButton address={address} />
		</Flex>
	);
};

export default CryptoAddressCopy;
