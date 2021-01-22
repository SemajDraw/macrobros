import React from 'react';
import { Grid, GridItem, Heading } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CategoryDropdown from "./CategoryDropdown";

export const SideBar = () => {
	return (
		<Grid templateColumns='repeat(12, 1fr)' gap={2}>
			<GridItem colSpan={12}>
				<Heading>Here</Heading>
				<CategoryDropdown/>
			</GridItem>
		</Grid>
	);
};

export default SideBar;
