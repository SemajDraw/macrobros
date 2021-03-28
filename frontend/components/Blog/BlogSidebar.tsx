import React, { FC } from 'react';
import StickyBox from 'react-sticky-box';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '../FramerMotion/MotionBox';
import { Divider, Flex, Text } from '@chakra-ui/layout';
import { ShareIcons } from '../shared/ShareIcons';

interface BlogSidebarProps {
	blogId: number;
	slug: string;
	title: string;
	readTime: string;
}

export const BlogSidebar: FC<BlogSidebarProps> = ({ blogId, slug, title, readTime }) => {
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: false
	});

	const variants = {
		visible: { opacity: 1, scale: 1, y: 0 },
		hidden: {
			y: -100,
			opacity: 0,
			scale: 0.99,
			delay: 1500
		}
	};

	return (
		<StickyBox offsetTop={200}>
			<MotionBox
				animate={inView ? 'visible' : 'hidden'}
				variants={variants}
				transition={{ duration: 1.5, ease: 'easeOut' }}
				ref={ref}
			>
				<Flex flexDirection={'column'} height={'100%'} width={'100%'} pr={10}>
					<Text fontSize={'xl'} fontWeight={'normal'} opacity={0.85}>
						{title}
					</Text>
					<Text fontSize={'sm'} opacity={0.6}>
						{readTime} read
					</Text>
					<Divider mt={4} mb={2} />
					<ShareIcons blogId={blogId} grid={false} slug={slug} />
				</Flex>
			</MotionBox>
		</StickyBox>
	);
};

export default BlogSidebar;
