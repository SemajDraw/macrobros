import React, { FC } from 'react';
import Bounce from 'react-reveal/Bounce';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

export const FooterSocialIcons: FC = () => {
	const margin = useBreakpointValue({ base: '10vw', lg: '14vw' });
	const icons = [
		{ icon: faFacebook, href: 'https://www.facebook.com/macro.bros.716' },
		{ icon: faInstagram, href: 'https://www.instagram.com/macro_bros.com_/' },
		{ icon: faTwitter, href: 'https://twitter.com/BrosMacro' }
	];
	return (
		<Bounce left duration={1000} cascade>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginLeft: `${margin}`,
					marginRight: `${margin}`
				}}
			>
				{icons.map((icon, i) => (
					<Box key={i} as='a' color='white' _hover={{ color: 'linkOrange' }} href={icon.href}>
						<FontAwesomeIcon size='2x' icon={icon.icon} />
					</Box>
				))}
			</div>
		</Bounce>
	);
};

export default FooterSocialIcons;
