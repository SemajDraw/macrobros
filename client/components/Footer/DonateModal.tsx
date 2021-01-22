import React from 'react';
import {
	Box,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react';
import { Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import { MacroBrosIcon } from '../shared/MacroBrosIcon';
import CryptoAddressCopy from '../shared/CryptoAddressCopy/CryptoAddressCopy';

export const DonateModal = ({ isOpen, onOpen, onClose }) => {
	const address = {
		bitcoin: 'coming soon...',
		ethereum: '0xf5BE6Df48EBc9c10666e482Ac3cA20Dae7C8Af3C'
	};
	return (
		<>
			<Modal finalFocusRef={null} isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Grid
							templateColumns='repeat(11, 1fr)'
							align='center'
							alignItems='center'
						>
							<GridItem colSpan={12} p={7}>
								<Box h='75px' w='75px' my={3}>
									<MacroBrosIcon id='login' strokeColor='black' />
								</Box>
								<Box my={2}>
									<Heading mb={2} as='h3' fontSize='1.5em' fontWeight={600}>
										Contribute to MacroBros
									</Heading>
									<Text>
										If you found the content we provide useful please consider donating.
										It helps to keep up producing quality content for you. We greatly
										appreciate any contribution you can make no matter how big or how
										small. Cheers from the Bros!
									</Text>
								</Box>
								<CryptoAddressCopy address={address.bitcoin} blockchain={'Bitcoin'} />
								<CryptoAddressCopy address={address.ethereum} blockchain={'Ethereum'} />
							</GridItem>
						</Grid>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default DonateModal;
