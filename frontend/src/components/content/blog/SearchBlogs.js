import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSearchBlogs} from "../../../actions/blog/blog";
import blogGridBuilder from "./blogGridBuilder";
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";

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
            <div className='container mt-3'>
                <p>Here is the aearch</p>
                {blogs === undefined || blogs.results.length === 0 ? null : blogGridBuilder(blogs.results)}

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