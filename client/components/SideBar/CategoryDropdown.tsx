import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import MotionBox from '../FramerMotion/MotionBox';
import { Box, Flex } from '@chakra-ui/layout';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { formatSlug } from '../../utils/stringUtils';
import Link from 'next/link';
import { HOME } from '../../constants/routes';

export const CategoryDropdown = ({ categories }) => {
	return (
		<AnimateSharedLayout>
			<MotionBox
				layout
				as={'ul'}
				listStyleType={'none'}
				boxShadow='0 10px 30px -5px rgba(0, 0, 0, 0.2)'
			>
				<CategoryItem categories={categories} />
			</MotionBox>
		</AnimateSharedLayout>
	);
};

function CategoryItem({ categories }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<MotionBox
				as={'li'}
				layout
				onClick={() => setIsOpen(!isOpen)}
				initial={{ borderRadius: 0 }}
			>
				<MotionBox
					layout
					p={3}
					bg={isOpen ? 'gray.50' : 'white'}
					borderRadius={2}
					cursor={'pointer'}
					_hover={{ background: 'gray.50' }}
				>
					<Flex fontSize={'md'} _hover={{ background: 'gray.50' }}>
						Categories{' '}
						<Box ml={'auto'}>
							<ChevronDownIcon h={5} w={5} />
						</Box>
					</Flex>
				</MotionBox>
			</MotionBox>
			<MotionBox>
				<AnimatePresence>
					{isOpen && <CategoryContent categories={categories} />}
				</AnimatePresence>
			</MotionBox>
		</>
	);
}

function CategoryContent({ categories }) {
	return categories.map((category, i) => (
		<Link href={HOME}>
			<MotionBox
				key={i}
				bg={'white'}
				cursor={'pointer'}
				_hover={{ background: 'gray.50' }}
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<Flex p={3} borderRadius={2}>
					{formatSlug(category)}
				</Flex>
			</MotionBox>
		</Link>
	));
}

export default CategoryDropdown;
