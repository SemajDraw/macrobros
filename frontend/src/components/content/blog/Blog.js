import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getBlogs, getFeaturedBlog} from "../../../actions/blog/blog";
import blogGridBuilder from "./blog-grid-builder/blogGridBuilder";
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";
import SideBar from "./side-bar/SideBar";
import Jumbotron from "react-bootstrap/Jumbotron";


export class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadPages = this.loadPages.bind(this);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/blog/search/${this.state.searchValue}`);
    }

    static propTypes = {
        blogs: PropTypes.object.isRequired,
        featuredBlog: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getBlogs();
        this.props.getFeaturedBlog();
    }

    loadPages(pageNumber) {
        this.props.getBlogs(pageNumber);
    }

    render() {
        const {blogs, featuredBlog} = this.props;
        return (
            <div className='mt-3 min-vh-100'>

                <div className='container-fluid'>
                    <Jumbotron>
                         <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                            <p className="lead my-3">{featuredBlog.excerpt}</p>
                            <p className="lead mb-0">
                                <Link to={`/blog/${featuredBlog.slug}`} className="font-weight-bold">Continue
                                    reading...</Link>
                            </p>
                    </Jumbotron>
                </div>

                <div className='container-fluid pt-3'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {blogGridBuilder(blogs.results)}
                        </div>
                        <div className='col-md-3'>
                            <SideBar history={this.props.history}/>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center my-3'>
                    {blogs.totalItems > 2 ?
                        <Pagination><PaginationBar blogs={blogs} nextPage={this.loadPages}/></Pagination>
                        : null
                    }
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    blogs: state.blog.blogs,
    featuredBlog: state.blog.featuredBlog
});

export default connect(mapStateToProps, {getBlogs, getFeaturedBlog})(Blog);