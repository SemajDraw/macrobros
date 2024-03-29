import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Box, Flex } from '@chakra-ui/react';

interface SocialIconsProps {
	iconColor: string;
}

export const SocialIcons: FC<SocialIconsProps> = ({ iconColor = 'white' }) => {
	const socialIcons = [
		{ icon: faFacebook, href: 'https://www.facebook.com/macro.bros.716' },
		{ icon: faInstagram, href: 'https://www.instagram.com/macro_bros.com_/' },
		{ icon: faTwitter, href: 'https://twitter.com/BrosMacro' }
	];

	return (
		<Box mb={1} mt={5}>
			<Flex justifyContent='space-between'>
				{socialIcons.map((icon, i) => (
					<Box
						color={iconColor}
						key={i}
						as='a'
						href={icon.href}
						_hover={{ color: 'linkOrange' }}
					>
						<FontAwesomeIcon size='2x' icon={icon.icon} />
					</Box>
				))}
			</Flex>
		</Box>
	);
};
