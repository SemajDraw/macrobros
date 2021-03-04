import React, { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ACCOUNT } from '../../../constants/routes';
import { NavButton } from '../NavButton';
import { WrappedLink } from '../../ChakraComponents/WrappedLink';

interface NavDrawerFooterProps {
	isAuthenticated: boolean;
	onClose: () => void;
}

export const NavDrawerFooter: FC<NavDrawerFooterProps> = ({
	isAuthenticated,
	onClose
}) => (
	<Flex direction={'column'} w={'100%'}>
		{isAuthenticated ? (
			<Box onClick={() => onClose()}>
				<NavButton isAuthenticated={isAuthenticated} text={'Sign Out'} />
			</Box>
		) : (
			<>
				<Box onClick={() => onClose()}>
					<NavButton isAuthenticated={isAuthenticated} text={'Sign In'} />
				</Box>
				<Flex mt={3}>
					<Text mr={1} fontSize={'xs'}>
						Not registered yet?{' '}
						<WrappedLink href={ACCOUNT.REGISTER} onClick={() => onClose()}>
							<Text color='blue.300' _hover={{ color: 'blue.400' }}>
								Sign Up
							</Text>
						</WrappedLink>
					</Text>
				</Flex>
			</>
		)}
	</Flex>
);
