import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MotionBox from '../FramerMotion/MotionBox';
import { Box, Flex } from '@chakra-ui/layout';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { formatSlug } from '../../utils/stringUtils';
import Link from 'next/link';
import { HOME } from '../../constants/routes';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel
} from '@chakra-ui/accordion';

export const CategoryAccordion = ({ categories }) => {
	return (
		<Accordion allowToggle>
			<AccordionItem border='none' boxShadow='0 10px 30px -5px rgba(0, 0, 0, 0.2)'>
				{({ isExpanded }) => (
					<>
						<AccordionButton
							_hover={{ background: 'rgba(0, 0, 0, 0.03)' }}
							background={isExpanded ? 'rgba(0, 0, 0, 0.03)' : 'white'}
							borderRadius={4}
							h={12}
							pl={4}
						>
							<Box flex='1' textAlign='left'>
								Categories
							</Box>
							<AccordionIcon />
						</AccordionButton>

						{isExpanded && (
							<Box borderRadius={4}>
								<CategoryItems categories={categories} />
							</Box>
						)}
					</>
				)}
			</AccordionItem>
		</Accordion>
	);
};

function CategoryItems({ categories }) {
	return categories.map((category, i) => (
		<Link key={i} href={HOME}>
			<MotionBox
				whileHover={{
					scale: 1.03,
					transition: { duration: 0.5 }
				}}
				transition={{ type: 'spring', duration: 1 }}
				bg={'white'}
				cursor={'pointer'}
			>
				<Flex h={12} pl={4} align={'center'}>
					{formatSlug(category)}
				</Flex>
			</MotionBox>
		</Link>
	));
}

export default CategoryAccordion;
