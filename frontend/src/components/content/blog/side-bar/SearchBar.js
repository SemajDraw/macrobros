import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import './SideBar.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

export const SearchBar = ({searchSubmit}) => {

    const [searchValue, setSearchValue] = useState( '')

    const handleSubmit = () => {
        searchSubmit(searchValue);
    }

    return (
        <div className='row'>
            <Form className='col-12' onSubmit={handleSubmit}>
                <Form.Group controlId="searchGroup">
                    <InputGroup className="mb-3">
                        <Form.Control
                            className='search-control'
                            onChange={e => setSearchValue(e.target.value)}
                            placeholder="Search blogs"
                            aria-label="Search blogs"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button className='search-button' id="basic-addon2" type="submit"
                                    value="Submit"><FontAwesomeIcon icon={faSearch}/></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    );
}

export default SearchBar;