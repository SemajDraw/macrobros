import React, {Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getBlogs, getFeaturedBlog, getSearchBlogs} from "../../../actions/blogs/blogs";
import blogGridBuilder from "./blogGridBuilder";


export class Blog extends Component {

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

    static propTypes = {
        blogs: PropTypes.array.isRequired,
        featuredBlog: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getBlogs();
        this.props.getFeaturedBlog();
    }

    render() {
        const {blogs, featuredBlog} = this.props;
        return (
            <div className='container mt-3'>
                <div className='nav-scroller py-1 mb-2'>
                    <nav className='nav d-flex justify-content-between'>
                        <Link className='p-s text-muted' to='/blog/category/crypto'>Crypto</Link>
                        <Link className='p-s text-muted' to='/blog/category/finance'>Finance</Link>
                        <Link className='p-s text-muted' to='/blog/category/economics'>Economics</Link>
                        <Link className='p-s text-muted' to='/blog/category/macro'>Macro</Link>
                        <Link className='p-s text-muted' to='/blog/category/micro'>Micro</Link>
                        <Link className='p-s text-muted' to='/blog/category/tech'>Tech</Link>
                        <Link className='p-s text-muted' to='/blog/category/trading'>Trading</Link>
                        <Link className='p-s text-muted' to='/blog/category/investment'>Investment</Link>
                    </nav>
                </div>

                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                        <p className="lead my-3">{featuredBlog.excerpt}</p>
                        <p className="lead mb-0">
                            <Link to={`/blog/${featuredBlog.slug}`} className="font-weight-bold">Continue
                                reading...</Link>
                        </p>
                    </div>
                </div>

                <Form onSubmit={this.handleSubmit}>
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

                {blogGridBuilder(blogs)}
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    blogs: state.blog.blogs,
    featuredBlog: state.blog.featuredBlog
});

export default connect(mapStateToProps, {getBlogs, getFeaturedBlog})(Blog);