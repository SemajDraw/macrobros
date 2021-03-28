import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BLOG } from '../../constants/routes';
import { Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { formatSlug } from '../../utils/stringUtils';
import { getPopularBlogsMin } from '../../redux/actions/blogActions';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { WrappedLink } from '../ChakraComponents/WrappedLink';
import { MotionBox } from '../FramerMotion/MotionBox';
import { PopularBlog } from '../../models/PopularBlog';
import { popularBlogMinSelector } from '../../redux/slices/BlogSlice';

export const PopularBlogs: FC = () => {
	const dispatch = useDispatch();
	const popularBlogs = useSelector(popularBlogMinSelector);
	const bg = useColorModeValue('white', '#1A202C');

	useEffect(() => {
		dispatch(getPopularBlogsMin());
	}, []);

	return (
		<Flex direction={'column'} bg={bg} boxShadow={'2xl'}>
			{popularBlogs?.map((blog: PopularBlog, i: number) => (
				<WrappedLink key={i} href={`${BLOG.BLOG}/${blog.slug}`} py={1}>
					<MotionBox
						whileHover={{
							scale: 1.015,
							transition: { duration: 0.2 },
							boxShadow: '0 5px 20px -5px rgba(0, 0, 0, 0.1)'
						}}
						transition={{ type: 'spring', duration: 1 }}
						bg={bg}
						cursor={'pointer'}
					>
						<Flex h={12} px={3} align={'center'} bg={bg}>
							<Image height={'20px'} src={blog?.icon} />
							<Text ml={2} fontWeight={400} fontSize={'md'} isTruncated>
								{formatSlug(blog?.slug)}
							</Text>
						</Flex>
					</MotionBox>
				</WrappedLink>
			))}
		</Flex>
	);
};
