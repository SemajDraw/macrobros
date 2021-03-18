import React, { FC, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { blogSelector } from '../../../redux/slices/BlogSlice';
import { getBlog } from '../../../redux/actions/blogActions';
import { Badge, Flex, Grid, GridItem, Heading, Spacer, Text } from '@chakra-ui/layout';
import BlogSidebar from '../../../components/Blog/BlogSidebar';
import { MetaInfo } from '../../../components/shared/MetaInfo';
import { Image } from '@chakra-ui/react';
import { formatSlug } from '../../../utils/stringUtils';
import { useFormatDate } from '../../../hooks/useFormatDate';
import { BlogFooter } from '../../../components/Blog/BlogFooter';
import { ShareIcons } from '../../../components/shared/ShareIcons';
import { BlogContent } from '../../../components/Blog/BlogContent';
import LoadingPage from '../../../components/shared/Loading/LoadingPage';
import { BLOG } from '../../../constants/routes';
import Link from 'next/link';

export const Index: FC = () => {
	const router = useRouter();
	const { slug } = router.query;
	const blog = useSelector(blogSelector);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const formattedDate = useFormatDate(blog.dateCreated, 'MMM D, YYYY');

	useEffect(() => {
		setLoading(true);
		if (slug) dispatch(getBlog(slug as string));
	}, [slug]);

	useEffect(() => {
		if (blog.slug === slug) setLoading(false);
	}, [blog]);

	return loading ? (
		<LoadingPage />
	) : (
		<>
			<MetaInfo title={`MacroBros - ${blog.title}`} description={blog.summary} />
			<Grid
				templateColumns='repeat(12, 1fr)'
				rowGap={{ base: 6, sm: 10 }}
				my={{ base: 6, md: 8, lg: 10 }}
				mx={{ base: '5vw', sm: 0 }}
			>
				<GridItem
					colStart={{ sm: 2, md: 3, lg: 4 }}
					colSpan={{ base: 12, sm: 10, md: 8, lg: 6 }}
				>
					<Flex flexDirection={'column'} width={'100%'}>
						<Heading
							fontSize={{ base: '4xl', md: '3em' }}
							fontWeight={'normal'}
							fontFamily={'Georgia'}
						>
							{blog.title}
						</Heading>
						<Text
							fontSize={{ base: 'lg', md: 'xl', lg: 'xl' }}
							fontWeight={'normal'}
							opacity={0.6}
						>
							{blog.excerpt}
						</Text>
						<Flex mt={5}>
							<Flex justify={'flex-end'} flexDirection={'column'}>
								<Flex>
									<Link href={`${BLOG.CATEGORY}/${blog.category}`}>
										<Badge borderRadius='md' px='2' cursor={'pointer'} colorScheme='telegram'>
											{formatSlug(blog.category)}
										</Badge>
									</Link>
								</Flex>
								<Flex mt={1} align={'center'} justify={'center'} fontSize={'sm'} opacity={0.6}>
									<Text mr={1}>{formattedDate}</Text>
									<Text>&#183;</Text>
									<Text ml={1}> {blog.readTime} read</Text>
								</Flex>
							</Flex>
							<Spacer />
							<ShareIcons blogId={blog.id} grid={true} slug={blog.slug} />
						</Flex>
					</Flex>
				</GridItem>
				<GridItem
					colStart={{ sm: 2, md: 3, lg: 4 }}
					colSpan={{ base: 12, sm: 10, md: 8, lg: 6 }}
				>
					<Flex width={'100%'} position={'relative'}>
						<Image src={blog.headerImg} width={'100%'} />
					</Flex>
				</GridItem>
				<GridItem colSpan={12}>
					<Grid templateColumns='repeat(12, 1fr)' rowGap={6}>
						<GridItem
							colStart={{ sm: 2, md: 3, lg: 4 }}
							colSpan={{ base: 12, sm: 10, md: 8, lg: 6 }}
						>
							<BlogContent html={blog.summary} />
						</GridItem>
						<GridItem
							display={{ base: 'none', lg: 'block' }}
							colStart={{ md: 2 }}
							colSpan={{ base: 0, md: 2 }}
							mb={'90vh'}
						>
							<BlogSidebar
								blogId={blog.id}
								title={blog.title}
								slug={blog.slug}
								readTime={blog.readTime}
							/>
						</GridItem>
						<GridItem
							colStart={{ sm: 2, md: 3, lg: 4 }}
							colSpan={{ base: 12, sm: 10, md: 8, lg: 6 }}
						>
							<BlogContent html={blog.content} />
						</GridItem>
						<GridItem
							colStart={{ sm: 2, md: 3, lg: 4 }}
							colSpan={{ base: 12, sm: 10, md: 8, lg: 6 }}
						>
							<Flex align={'center'} flexDirection={'column'}>
								<ShareIcons blogId={blog.id} grid={false} slug={blog.slug} />
							</Flex>
						</GridItem>
					</Grid>
				</GridItem>
				<GridItem colStart={{ sm: 2 }} colSpan={{ base: 12, sm: 10 }}>
					<BlogFooter />
				</GridItem>
			</Grid>
		</>
	);
};

export default memo(Index);
