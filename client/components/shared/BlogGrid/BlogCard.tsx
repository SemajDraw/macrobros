import React, { FC } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/layout';
import ParallaxBox from '../../FramerMotion/ParallaxBox';
import { MotionBox } from '../../FramerMotion/MotionBox';
import { useFormatDate } from '../../../hooks/useFormatDate';
import { formatSlug } from '../../../utils/stringUtils';
import { BlogMin } from '../../../models/BlogMin';

const Card = ({ blog }) => (
	<MotionBox
		whileHover={{
			scale: 1.05,
			transition: { duration: 0.5 }
		}}
		transition={{ type: 'spring', duration: 1 }}
		borderWidth='1px'
		borderRadius='md'
		overflow='hidden'
		shadow='lg'
		cursor={'pointer'}
	>
		<Image src={blog.thumbnail} alt={''} />

		<Box p='6'>
			<Box d='flex' alignItems='baseline'>
				<Badge borderRadius='full' px='2' colorScheme='teal'>
					{formatSlug(blog.category)}
				</Badge>
				<Box
					color='gray.500'
					fontWeight='semibold'
					letterSpacing='wide'
					fontSize='xs'
					textTransform='uppercase'
					ml='2'
				>
					{useFormatDate(blog.dateCreated, 'MMMM D, YYYY')}
				</Box>
			</Box>

			<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' fontSize='lg' isTruncated>
				{blog.title}
			</Box>

			<Box h={'4.5em'}>
				<Text
					as='span'
					color='gray.600'
					fontSize='md'
					fontWeight={'normal'}
					noOfLines={3}
					isTruncated
				>
					{blog.excerpt}
				</Text>
			</Box>
		</Box>
	</MotionBox>
);

interface BlogCardProps {
	blog: BlogMin;
	index: number;
}

export const BlogCard: FC<BlogCardProps> = ({ blog, index }) => {
	return (
		<ParallaxBox>
			<Card key={index} blog={blog} />
		</ParallaxBox>
	);
};

export default BlogCard;
