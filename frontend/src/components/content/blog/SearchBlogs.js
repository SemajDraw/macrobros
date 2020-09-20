import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSearchBlogs} from "../../../actions/blog/blog";
import blogGridBuilder from "./blog-grid-builder/blogGridBuilder";
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";
import SideBar from "./side-bar/SideBar";

export class SearchBlogs extends Component {

    constructor(props) {
        super(props);
        this.state = {search: this.props.match.params.search};

        this.loadPages = this.loadPages.bind(this);
    }

    static propTypes = {
        blogs: PropTypes.object
    };

    componentDidMount() {
        this.props.getSearchBlogs(this.state.search);
    }

    loadPages(pageNumber) {
        this.props.getSearchBlogs(this.state.search, pageNumber);
    }

    render() {
        const {blogs} = this.props;
        return (
            <div className='mt-3 min-vh-100'>

                <div className='container-fluid'>
                    <h3 className='display-4'>Results</h3>
                </div>

                <div className='container-fluid pt-3'>
                    {blogs === undefined || blogs.results.length === 0 ?

                        <p>Render a no results component in here</p> :

                        <div className='row'>
                            <div className='col-md-9'>
                                {blogGridBuilder(blogs.results)}
                            </div>
                            <div className='col-md-3'>
                                <SideBar history={this.props.history}/>
                            </div>
                        </div>
                    }
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
    blogs: state.blog.searchBlogs
});

export default connect(mapStateToProps, {getSearchBlogs})(SearchBlogs);