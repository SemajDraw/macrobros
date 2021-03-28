import React, { FC } from 'react';
import {
	Box,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react';
import { Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import { MacroBrosIcon } from '../shared/Icons/MacroBrosIcon';
import CryptoAddressCopy from '../shared/CryptoAddressCopy/CryptoAddressCopy';

interface DonateModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const DonateModal: FC<DonateModalProps> = ({ isOpen, onClose }) => {
	const address = {
		bitcoin: 'coming soon...',
		ethereum: '0xf5BE6Df48EBc9c10666e482Ac3cA20Dae7C8Af3C'
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent
				minWidth={{ base: '90%', sm: '355px', md: '450px', lg: '550px' }}
				maxWidth={{ base: '90%', sm: '400px', lg: '550px' }}
			>
				<ModalCloseButton />
				<ModalBody>
					<Grid templateColumns='repeat(11, 1fr)' align='center' alignItems='center'>
						<GridItem colSpan={12} p={{ base: 2, sm: 7 }}>
							<Box h='75px' w='75px' my={3}>
								<MacroBrosIcon id='login' strokeColor='black' />
							</Box>
							<Box my={2}>
								<Heading mb={2} as='h3' fontSize='1.5em' fontWeight={600}>
									Contribute to MacroBros
								</Heading>
								<Text fontWeight={'normal'}>
									If you found the content we provide useful please consider donating. It helps to
									keep us producing quality content for you. We greatly appreciate any contribution
									you can make no matter how big or how small. Cheers from the Bros!
								</Text>
							</Box>
							<CryptoAddressCopy address={address.bitcoin} blockchain={'Bitcoin'} />
							<CryptoAddressCopy address={address.ethereum} blockchain={'Ethereum'} />
						</GridItem>
					</Grid>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default DonateModal;
