import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import './SideBar.scss';

export class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/blog/search/${this.state.searchValue}`);
    }

    render() {
        return (
            <div className='row'>
                <Form className='col-12' onSubmit={this.handleSubmit}>
                    <Form.Group controlId="searchGroup">
                        <InputGroup className="mb-3">
                            <Form.Control
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder="Search blogs"
                                aria-label="Search blogs"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" id="basic-addon2" type="submit"
                                        value="Submit">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default SearchBar;