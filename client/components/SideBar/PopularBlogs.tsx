import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HOME } from '../../constants/routes';
import { Flex, Text } from '@chakra-ui/layout';
import { formatSlug } from '../../utils/stringUtils';
import { getPopularBlogs } from '../../redux/actions/blogActions';
import { useColorModeValue } from '@chakra-ui/color-mode';
import WrappedLink from '../ChakraComponents/WrappedLink';
import MotionBox from '../FramerMotion/MotionBox';

export const PopularBlogs = () => {
	const dispatch = useDispatch();
	const popularBlogs = useSelector((state) => state.blog.popularBlogs);
	const bg = useColorModeValue('white', '#1A202C');
	console.log('pops', popularBlogs);

	useEffect(() => {
		dispatch(getPopularBlogs());
	}, []);

	return (
		<Flex direction={'column'} bg={bg} boxShadow={'2xl'}>
			{popularBlogs?.map((blog: any, i: number) => (
				<WrappedLink key={i} href={HOME}>
					<MotionBox
						py={1}
						whileHover={{
							scale: 1.015,
							transition: { duration: 0.2 },
							boxShadow: '0 5px 20px -5px rgba(0, 0, 0, 0.1)'
						}}
						transition={{ type: 'spring', duration: 1 }}
						bg={bg}
						cursor={'pointer'}
					>
						<Flex h={12} pl={4} align={'center'} bg={bg}>
							<img src={blog?.icon} />
							<Text fontWeight={400} fontSize={'md'}>
								{formatSlug(blog?.slug)}
							</Text>
						</Flex>
					</MotionBox>
				</WrappedLink>
			))}
		</Flex>
	);
};

export default PopularBlogs;