import React, { useEffect } from 'react';
import { Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Tab, TabList, Tabs } from '@chakra-ui/tabs';
import { useAuth } from '../../providers/AuthProvider';
import { formatUserInitials } from '../../utils/stringUtils';
import { ACCOUNT, HOME } from '../../constants/routes';
import WrappedLink from '../ChakraComponents/WrappedLink';
import { useRouter } from 'next/router';

export const ProfileTemplate = (props: any) => {
	const { children, tabIndex } = props;
	const { isAuthenticated, user } = useAuth();
	const avatarSize = useBreakpointValue({ base: 'xl', sm: '2xl' });
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push(HOME);
		}
	}, [isAuthenticated]);

	return (
		<Flex
			minH={'100vh'}
			mt={20}
			mx={{ base: '5vw', sm: '8vw', md: '12.5vw', lg: '25vw' }}
			direction={'column'}
		>
			<Flex h={'100%'} w={'100%'}>
				<Flex w={'100%'} justifyContent={'between'} pb={10}>
					<Text fontSize={{ base: '4xl', sm: '5xl' }} letterSpacing={'-0.08em'}>
						{isAuthenticated && formatUserInitials([user?.firstName, user?.lastName])}
					</Text>
					<Spacer />
					<Avatar bg={'orange.800'} size={avatarSize} name={`${user?.firstName}`} />
				</Flex>
			</Flex>
			<Flex w={'100%'} justifyContent={'between'} mt={5} direction={'column'}>
				<Tabs defaultIndex={tabIndex}>
					<TabList>
						<Tab>
							<WrappedLink href={ACCOUNT.PROFILE}>Profile</WrappedLink>
						</Tab>
						<Tab>
							<WrappedLink href={ACCOUNT.SETTINGS}>Settings</WrappedLink>
						</Tab>
					</TabList>
				</Tabs>
				{children}
			</Flex>
		</Flex>
	);
};

export default ProfileTemplate;
