import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Bounce from 'react-reveal/Bounce';
import { MacroBrosIcon } from '../shared/Icons/MacroBrosIcon';
import { Heading } from '@chakra-ui/layout';
import { MotionBox } from '../FramerMotion/MotionBox';

export const HomeJumbotron: FC = () => {
	return (
		<Flex
			flexDirection='column'
			minHeight='60vh'
			borderBottomRadius={{ base: '1em', md: '2em' }}
			bgGradient='linear(to-b, #471c71, #FFAF7B)'
			justifyContent='center'
			alignItems='center'
		>
			<Flex>
				<Bounce delay={500} top>
					<MotionBox
						initial={{
							rotateY: 180
						}}
						animate={{
							rotateY: 360
						}}
						transition={{ delay: 1, duration: 1.5 }}
					>
						<Box h='30vh' w='30vh'>
							<MacroBrosIcon id='home' strokeColor='white' />
						</Box>
					</MotionBox>
				</Bounce>
			</Flex>
			<Flex>
				<MotionBox initial={{ x: -1000 }} animate={{ x: 0 }}>
					<Heading as='h1' size='4xl' color='white' fontWeight={800}>
						Macro
					</Heading>
				</MotionBox>
				<MotionBox initial={{ x: +1000 }} animate={{ x: 0 }}>
					<Heading as='h1' size='4xl' color='white' fontWeight={800}>
						Bros
					</Heading>
				</MotionBox>
			</Flex>
		</Flex>
	);
};

export default HomeJumbotron;
