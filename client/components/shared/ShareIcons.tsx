import React, { FC } from 'react';
import { Box, Circle, Flex } from '@chakra-ui/layout';
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { shareUrl } from '../../utils/stringUtils';
import { useAuth } from '../../providers/AuthProvider';
import { Tooltip } from '@chakra-ui/tooltip';
import { saveBlog } from '../../redux/actions/accountActions';
import { useDispatch } from 'react-redux';

interface ShareIconsProps {
	blogId: number;
	slug: string;
	grid: boolean;
}

interface IconBoxProps {
	label: string;
}

const IconBox: FC<IconBoxProps> = ({ children, label }) => {
	return (
		<Box ml={1}>
			<Tooltip hasArrow label={label} placement='top' bg={'#7d96a4'}>
				{children}
			</Tooltip>
		</Box>
	);
};

export const ShareIcons: FC<ShareIconsProps> = ({ blogId, slug, grid }) => {
	const { isAuthenticated } = useAuth();
	const dispatch = useDispatch();

	return (
		<Flex flexDirection={grid ? { base: 'column', sm: 'row' } : 'row'}>
			<Flex>
				<IconBox label={'Share'}>
					<TwitterShareButton url={shareUrl(slug)}>
						<TwitterIcon round={true} size={35} />
					</TwitterShareButton>
				</IconBox>
				<IconBox label={'Share'}>
					<LinkedinShareButton url={shareUrl(slug)}>
						<LinkedinIcon round={true} size={35} />
					</LinkedinShareButton>
				</IconBox>

				{!isAuthenticated && (
					<IconBox label={'Share'}>
						<FacebookShareButton url={shareUrl(slug)}>
							<FacebookIcon round={true} size={35} />
						</FacebookShareButton>
					</IconBox>
				)}
			</Flex>
			{isAuthenticated && (
				<Flex>
					<IconBox label={'Share'}>
						<FacebookShareButton url={shareUrl(slug)}>
							<FacebookIcon round={true} size={35} />
						</FacebookShareButton>
					</IconBox>
					<IconBox label={'Save'}>
						<Circle
							w={'35px'}
							h={'35px'}
							bg={'#6492a3'}
							cursor={'pointer'}
							onClick={() => dispatch(saveBlog(blogId))}
						>
							<FontAwesomeIcon icon={faBookmark} color={'white'} />
						</Circle>
					</IconBox>
				</Flex>
			)}
		</Flex>
	);
};
