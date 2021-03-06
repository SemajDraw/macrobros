import React, { FC, useEffect } from 'react';
import { MotionBox } from '../FramerMotion/MotionBox';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { formatSlug } from '../../utils/stringUtils';
import { HOME } from '../../constants/routes';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogCategories } from '../../redux/actions/blogActions';
import { WrappedLink } from '../ChakraComponents/WrappedLink';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem
} from '@chakra-ui/accordion';
import { State } from '../../redux/RootReducer';

interface CategoryAccordianItemsProps {
	category: string;
	bg: string;
}

const CategoryAccordianItem: FC<CategoryAccordianItemsProps> = ({ category, bg }) => (
	<WrappedLink href={HOME}>
		<MotionBox
			whileHover={{
				scale: 1.015,
				transition: { duration: 0.5 },
				boxShadow: '0 5px 20px -5px rgba(0, 0, 0, 0.1)'
			}}
			transition={{ type: 'spring', duration: 1 }}
			bg={bg}
			cursor={'pointer'}
		>
			<Flex h={12} pl={4} align={'center'}>
				<Text fontWeight={400} fontSize={'md'}>
					{formatSlug(category)}
				</Text>
			</Flex>
		</MotionBox>
	</WrappedLink>
);

export const CategoryAccordion: FC = () => {
	const dispatch = useDispatch();
	const categories: string[] = useSelector((state: State) => state.blog.blogCategories);
	const bg = useColorModeValue('white', '#1A202C');

	useEffect(() => {
		dispatch(getBlogCategories());
	}, []);

	return (
		<Accordion allowToggle>
			<AccordionItem border='none' boxShadow='0 10px 30px -5px rgba(0, 0, 0, 0.2)'>
				{({ isExpanded }) => (
					<>
						<AccordionButton
							_hover={{ background: 'rgba(0, 0, 0, 0.03)' }}
							background={isExpanded ? 'rgba(0, 0, 0, 0.03)' : { bg }}
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
								{categories.map((category: string, i: number) => (
									<CategoryAccordianItem key={i} category={category} bg={bg} />
								))}
							</Box>
						)}
					</>
				)}
			</AccordionItem>
		</Accordion>
	);
};
