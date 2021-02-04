import React from 'react';
import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react';
import { Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import { MacroBrosIcon } from '../../../components/shared/Icons/MacroBrosIcon';
import WrappedLink from '../../../components/ChakraComponents/WrappedLink';
import { HOME } from '../../../constants/routes';

export const CloseAccountModal = (props: any) => {
	const { isOpen, onClose, callBack } = props;
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody>
					<Grid templateColumns='repeat(11, 1fr)' align='center' alignItems='center'>
						<GridItem colSpan={12} p={7}>
							<Box h='75px' w='75px' my={3}>
								<MacroBrosIcon id='login' strokeColor='black' />
							</Box>
							<Box my={2}>
								<Heading mb={3} as='h3' fontSize='1.7em' fontWeight={600}>
									We're sorry to see you go!
								</Heading>
								<Text fontWeight={'normal'}>
									If you have a minute please{' '}
									<WrappedLink
										href={HOME}
										color={'blue.500'}
										_hover={{ color: 'blue.700' }}
									>
										{' '}
										let us know{' '}
									</WrappedLink>
									what we can do to improve your experience we would greatly appreciate
									it. Thank you for being a part of the MacroBros community!
								</Text>
							</Box>
							<Box pt={4}>
								<Button
									px={10}
									colorScheme={'blue'}
									onClick={() => callBack({ isClosed: 'true' })}
								>
									CLOSE ACCOUNT
								</Button>
							</Box>
						</GridItem>
					</Grid>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default CloseAccountModal;