import React, { useState } from 'react';
import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import { MacroBrosIcon } from '../components/shared/MacroBrosIcon';
import Bounce from 'react-reveal/Bounce';
import { Heading } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/system';
import LoadingSpinner from '../components/shared/LoadingSpinner';

export const Index = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div style={{ minHeight: '100vh' }}>
			<Head>
				<meta
					name='description'
					content='This is the MacroBros blog website, where 2 brothers discuss macroeconomic topics with
					 a focus on wealth preservation, cryptocurrencies, stocks and much more.'
				/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<Flex
				flexDirection='column'
				minHeight='60vh'
				borderBottomRadius={20}
				bgGradient='linear(to-b, #471c71, #FFAF7B)'
				justifyContent='center'
				alignItems='center'
			>
				<Flex>
					<Bounce delay={500} top>
						<motion.div
							initial={{
								rotateY: 180
							}}
							animate={{
								rotateY: 360
							}}
							transition={{ delay: 1, duration: 1 }}
						>
							<Box h='30vh' w='30vh'>
								<MacroBrosIcon id='home' strokeColor='white' />
							</Box>
						</motion.div>
					</Bounce>
				</Flex>
				<Flex>
					<Bounce left>
						<Heading as='h1' size='4xl' color='white' fontWeight={800}>
							Macro
						</Heading>
					</Bounce>
					<Bounce right>
						<Heading as='h1' size='4xl' color='white' fontWeight={800} >
							Bros
						</Heading>
					</Bounce>
				</Flex>
			</Flex>
			<Flex
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				minHeight='40vh'
			>
				{isLoading ? <LoadingSpinner isLoading={isLoading} /> : <div>what</div>}
			</Flex>
		</div>
	);
};

// export const getServerSideProps = async () => {
// 	const dispatch = useDispatch();
//
// };

export default Index;
