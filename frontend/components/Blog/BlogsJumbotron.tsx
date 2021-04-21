import React, { FC, memo, useState } from 'react';
import { Flex, Image, Skeleton, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { featuredBlogSelector } from '../../redux/slices/BlogSlice';
import { BLOG } from '../../constants/routes';
import { WrappedLink } from '../ChakraComponents/WrappedLink';

export const BlogsJumbotron: FC = () => {
	const featuredBlog = useSelector(featuredBlogSelector);
	const [imgLoaded, setImgLoaded] = useState(false);

	return (
		<WrappedLink href={`${BLOG.BLOG}/${featuredBlog.slug}`}>
			<Flex
				cursor={'pointer'}
				flexDirection='column'
				borderRadius={{ base: '5px', md: '5px' }}
				my={{ base: 6, sm: 6, md: 6, lg: 8 }}
				mx={{ base: '3vw', md: '8vw', lg: '9vw' }}
			>
				<Skeleton
					display={imgLoaded ? 'none' : 'block'}
					h={{ base: '170px', sm: '270px', md: '310px', lg: '440px' }}
				/>
				<Flex width={'100%'} position={'relative'}>
					<Image
						src={featuredBlog?.headerImg}
						display={imgLoaded ? 'block' : 'none'}
						onLoad={() => setImgLoaded(true)}
					/>
					<Flex
						p={{ base: 4, sm: 5, md: 6, lg: 8 }}
						direction={'column'}
						height={'100%'}
						width={'100%'}
						position={'absolute'}
						zIndex={100}
						background={'transparent'}
						justify={'flex-end'}
					>
						<Text
							color={'white'}
							fontSize={{ base: 'lg', sm: 'xl', md: '2xl', lg: '4xl' }}
							noOfLines={1}
							isTruncated
						>
							{featuredBlog?.title}
						</Text>
						<Text
							color={'white'}
							fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}
							fontWeight={'light'}
							noOfLines={1}
							isTruncated
						>
							{featuredBlog?.excerpt}
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</WrappedLink>
	);
};

export default memo(BlogsJumbotron);
