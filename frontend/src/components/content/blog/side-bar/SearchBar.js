import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './SideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { Blog } from '../../../common/Routes';

export const SearchBar = (props) => {
	const [searchValue, setSearchValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		props.props.history.push(`${Blog.BLOG_SEARCH}?search_value=${searchValue}`);
	};

	return (
		<div className='row'>
			<Form className='col-12' onSubmit={handleSubmit}>
				<Form.Group controlId='searchGroup'>
					<InputGroup className='mb-3'>
						<Form.Control
							className='search-control'
							onChange={(e) => setSearchValue(e.target.value)}
							placeholder='Search blogs'
							aria-label='Search blogs'
							aria-describedby='basic-addon2'
						/>
						<InputGroup.Append>
							<Button
								className='search-button'
								id='basic-addon2'
								type='button'
								onClick={handleSubmit}
							>
								<FontAwesomeIcon icon={faSearch} />
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form.Group>
			</Form>
		</div>
	);
};

export default SearchBar;
