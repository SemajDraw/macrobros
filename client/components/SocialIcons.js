import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
export const SocialIcons = ({ as, color, hover }) => {
	return (
		<Flex>
			<Box
				as={as}
				color={color}
				_hover={hover}
				href='https://www.facebook.com/macro.bros.716'
			>
				<FontAwesomeIcon size='2x' icon={faFacebook} />
			</Box>
			<Box
				as={as}
				color={color}
				_hover={hover}
				href='https://www.instagram.com/macro_bros.com_/'
			>
				<FontAwesomeIcon size='2x' icon={faInstagram} />
			</Box>
			<Box
				as={as}
				color={color}
				_hover={hover}
				href='https://twitter.com/BrosMacro'
			>
				<FontAwesomeIcon size='2x' icon={faTwitter} />
			</Box>
		</Flex>
	);
};

export default SocialIcons;
