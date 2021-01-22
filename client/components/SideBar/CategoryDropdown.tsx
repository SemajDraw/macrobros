import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MotionBox from '../FramerMotion/MotionBox';
import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

export const CategoryDropdown = () => {
	const [isOpen, setOpen] = useState(false);
	console.log(isOpen);
	const variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: '-100%' }
	};
	return (
		<Box>
			<Box
				as='button'
				bg='tomato'
				w='100%'
				p={4}
				color='white'
				onClick={() => setOpen(!isOpen)}
			>
				This is the Box
			</Box>
			<AnimatePresence>
				<MotionBox variants={variants} animate={isOpen ? 'open' : 'closed'}>
					<Box bg='tomato' w='100%' p={4} color='white'>
						hello
					</Box>
					<Box bg='tomato' w='100%' p={4} color='white'>
						cunt
					</Box>
				</MotionBox>
			</AnimatePresence>
		</Box>
	);
};

export default CategoryDropdown;
