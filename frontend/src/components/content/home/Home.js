import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBlogs} from "../../../actions/blog/blog";
import PropTypes from "prop-types";
import './Home.scss';
import blogGridBuilder from "../blog/blog-grid-builder/blogGridBuilder";
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";
import SideBar from "../blog/side-bar/SideBar";
import Jumbotron from "react-bootstrap/Jumbotron";

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadPages = this.loadPages.bind(this);
    }

    static propTypes = {
        blogs: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getBlogs();
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/blog/search/${this.state.searchValue}`);
    }

    loadPages(pageNumber) {
        this.props.getBlogs(pageNumber);
    }

    render() {
        const {blogs} = this.props;
        return (
            <div className='min-vh-100'>
                <Jumbotron fluid className='d-flex flex-column justify-content-center align-items-center'>
                    <h1>MacroBros</h1>
                    <p>
                        Some random shit about macbrobros and below links to some of our shit
                    </p>
                </Jumbotron>

                <div className='container-fluid pt-5'>
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
});

export default connect(mapStateToProps, {getBlogs})(Home);