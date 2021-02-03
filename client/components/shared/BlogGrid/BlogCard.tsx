import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/layout';
import { StarIcon } from '@chakra-ui/icons';
import ParallaxBox from '../../FramerMotion/ParallaxBox';
import MotionBox from '../../FramerMotion/MotionBox';

const Card = ({ blog }) => {
	// TODO Remove this
	// console.log(blog);
	const property = {
		imageUrl: 'https://bit.ly/2Z4KKcF',
		imageAlt: 'Rear view of modern home with pool',
		beds: 3,
		baths: 2,
		title: 'Modern home in city center in the heart of historic Los Angeles',
		formattedPrice: '$1,900.00',
		reviewCount: 34,
		rating: 4
	};

	return (
		<MotionBox
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.5 }
			}}
			transition={{ type: 'spring', duration: 1 }}
			maxW='lg'
			borderWidth='1px'
			borderRadius='md'
			overflow='hidden'
			shadow='lg'
			cursor={'pointer'}
		>
			<Image src={property.imageUrl} alt={property.imageAlt} />

			<Box p='6'>
				<Box d='flex' alignItems='baseline'>
					<Badge borderRadius='full' px='2' colorScheme='teal'>
						New
					</Badge>
					<Box
						color='gray.500'
						fontWeight='semibold'
						letterSpacing='wide'
						fontSize='xs'
						textTransform='uppercase'
						ml='2'
					>
						{property.beds} beds &bull; {property.baths} baths
					</Box>
				</Box>

				<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
					{property.title}
				</Box>

				<Box>
					{property.formattedPrice}
					<Box as='span' color='gray.600' fontSize='sm'>
						/ wk
					</Box>
				</Box>

				<Box d='flex' mt='2' alignItems='center'>
					{Array(5)
						.fill('')
						.map((_, i) => (
							<StarIcon
								key={i}
								color={i < property.rating ? 'teal.500' : 'gray.300'}
							/>
						))}
					<Box as='span' ml='2' color='gray.600' fontSize='sm'>
						{property.reviewCount} reviews
					</Box>
				</Box>
			</Box>
		</MotionBox>
	);
};

export const BlogCard = ({ blog, index }) => {
	return (
		<ParallaxBox>
			<Card key={index} blog={blog} />
		</ParallaxBox>
	);
};

export default BlogCard;
