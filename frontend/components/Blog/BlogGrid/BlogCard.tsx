import React, { FC, useState } from 'react';
import { BlogMin } from '../../../models/BlogMin';
import { BLOG } from '../../../constants/routes';
import { MotionBox } from '../../FramerMotion/MotionBox';
import { Box, Flex, Grid, GridItem, Image, Skeleton, Text } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/layout';
import { formatSlug } from '../../../utils/stringUtils';
import { useFormatDate } from '../../../hooks/useFormatDate';
import { ResponsiveValue } from '@chakra-ui/system';
import { WrappedLink } from '../../ChakraComponents/WrappedLink';

interface CardProps {
	blog: BlogMin;
	colSpan?: ResponsiveValue<number | 'auto'>;
}

export const BlogCard: FC<CardProps> = ({
	blog,
	colSpan = { base: 12, sm: 6, md: 12 }
}) => {
	const [imgLoaded, setImgLoaded] = useState(false);
	return (
		<WrappedLink href={`${BLOG.BLOG}/${blog.slug}`}>
			<MotionBox
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.5 }
				}}
				transition={{ type: 'spring', duration: 0.5 }}
				borderRadius='md'
				overflow='hidden'
				cursor={'pointer'}
				shadow='lg'
			>
				<Grid templateColumns='repeat(12, 1fr)' gap={{ base: 0, sm: 2, md: 0 }}>
					<GridItem colSpan={colSpan}>
						<Image
							height={'100%'}
							width={'100%'}
							src={blog.thumbnail}
							alt={blog.thumbnail}
							display={imgLoaded ? 'block' : 'none'}
							onLoad={() => setImgLoaded(true)}
						/>
						<Skeleton
							display={imgLoaded ? 'none' : 'block'}
							h={{ base: '280px', sm: '230px', md: '250px', lg: '265px' }}
						/>
					</GridItem>
					<GridItem colSpan={colSpan}>
						<Flex p='6' height={'100%'} justify={'center'} flexDirection={'column'}>
							<Flex align='baseline'>
								<Badge borderRadius='full' px='2' colorScheme='telegram'>
									{formatSlug(blog.category)}
								</Badge>
								<Box
									color='gray.500'
									fontWeight='semibold'
									letterSpacing='wide'
									fontSize='xs'
									textTransform='uppercase'
									ml='2'
									isTruncated
								>
									{useFormatDate(blog.dateCreated, 'MMM D, YYYY')}
								</Box>
							</Flex>

							<Box
								mt='1'
								fontWeight='semibold'
								as='h4'
								lineHeight='tight'
								fontSize='lg'
								isTruncated
							>
								{blog.title}
							</Box>

							<Box h={'4.5em'}>
								<Text color='gray.600' fontSize='md' fontWeight={'normal'} noOfLines={3}>
									{blog.excerpt}
								</Text>
							</Box>
						</Flex>
					</GridItem>
				</Grid>
			</MotionBox>
		</WrappedLink>
	);
};
