import React, { FC, memo, useState } from 'react';
import {
	Badge,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Skeleton,
	Spacer,
	Text,
	useColorMode
} from '@chakra-ui/react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import BlogSidebar from '../../../components/Blog/BlogSidebar';
import { MetaInfo } from '../../../components/shared/MetaInfo';
import { formatSlug } from '../../../utils/stringUtils';
import { useFormatDate } from '../../../hooks/useFormatDate';
import { BlogFooter } from '../../../components/Blog/BlogFooter';
import { ShareIcons } from '../../../components/shared/ShareIcons';
import { BlogContent } from '../../../components/Blog/BlogContent';
import { BLOG } from '../../../constants/routes';
import { WrappedLink } from '../../../components/ChakraComponents/WrappedLink';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { fetcher } from '../../../library/fetcher';
import { Blog } from '../../../models/Blog';

const GridBox = ({ children }) => (
	<GridItem
		colStart={{ sm: 2, md: 3, lg: 4 }}
		colSpan={{ base: 12, sm: 10, md: 8, lg: 6 }}
	>
		{children}
	</GridItem>
);

export const Index: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	blog
}) => {
	const formattedDate = useFormatDate(blog.dateCreated, 'MMM D, YYYY');
	const [imgLoaded, setImgLoaded] = useState(false);
	const { colorMode } = useColorMode();

	return (
		<>
			<MetaInfo title={`MacroBros - ${blog.title}`} description={blog.summary} />
			<Grid
				templateColumns='repeat(12, 1fr)'
				rowGap={{ base: 6, sm: 10 }}
				my={{ base: 6, md: 8, lg: 10 }}
				mx={{ base: '5vw', sm: 0 }}
			>
				<GridBox>
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
									<WrappedLink href={`${BLOG.CATEGORY}/${blog.category}`}>
										<Badge borderRadius='md' px='2' cursor={'pointer'} colorScheme='telegram'>
											{formatSlug(blog.category)}
										</Badge>
									</WrappedLink>
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
				</GridBox>
				<GridBox>
					<Skeleton
						display={imgLoaded ? 'none' : 'block'}
						h={{ base: '220px', sm: '390px', md: '400px', lg: '450px' }}
					/>
					<Flex width={'100%'} position={'relative'}>
						<Image
							width={'100%'}
							src={blog.headerImg}
							alt={blog.slug}
							display={imgLoaded ? 'block' : 'none'}
							onLoad={() => setImgLoaded(true)}
						/>
					</Flex>
				</GridBox>
				<GridItem colSpan={12}>
					<Grid templateColumns='repeat(12, 1fr)' rowGap={6}>
						<GridBox>
							<BlogContent html={blog.summary} />
						</GridBox>
						{blog.displayChart && blog.marketPair ? (
							<GridItem
								h={'500px'}
								maxH={'80vh'}
								colStart={{ sm: 2, md: 3, lg: 4 }}
								colSpan={{ base: 12, sm: 10, md: 8, lg: 6 }}
							>
								<TradingViewWidget
									theme={colorMode === 'dark' ? Themes.DARK : Themes.LIGHT}
									symbol={blog.marketPair}
									interval={'60'}
									autosize
								/>
							</GridItem>
						) : null}
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
						<GridBox>
							<BlogContent html={blog.content} />
						</GridBox>
						<GridBox>
							<Flex align={'center'} flexDirection={'column'}>
								<ShareIcons blogId={blog.id} grid={false} slug={blog.slug} />
							</Flex>
						</GridBox>
					</Grid>
				</GridItem>
				<GridItem colStart={{ sm: 2 }} colSpan={{ base: 12, sm: 10 }}>
					<BlogFooter />
				</GridItem>
			</Grid>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { slug } = context.query;
	const url: string =
		process.env.NODE_ENV !== 'production'
			? `http://localhost:8000/api/blog/${slug}`
			: `http://macrobros-api:8000/api/blog/${slug}`;
	const blog: Blog = await fetcher(url);

	return { props: { blog } };
};

export default memo(Index);
