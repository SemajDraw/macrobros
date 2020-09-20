import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {getCategoryBlogs} from "../../../actions/blog/blog";
import capitalizeFirstLetter from "../../../services/capitalizeFirstLetter";
import blogGridBuilder from "./blog-grid-builder/blogGridBuilder";
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";
import SideBar from "./side-bar/SideBar";

export class CategoryBlogs extends Component {

    constructor(props) {
        super(props);
        this.state = {category: capitalizeFirstLetter(this.props.match.params.category)};

        this.loadPages = this.loadPages.bind(this);
    }

    static propTypes = {
        blogs: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getCategoryBlogs(this.state.category);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            console.log('contains hypheyn?:', this.props.match.params.category.includes('-'))
            if (this.props.match.params.category.includes('-')) {
                this.state.category = this.props.match.params.category.split('-').map((word) => capitalizeFirstLetter(word)).join(' ');
            } else {
                this.state.category = capitalizeFirstLetter(this.props.match.params.category);
            }
            this.props.getCategoryBlogs(this.state.category);
        }
    }

    loadPages(pageNumber) {
        this.props.getCategoryBlogs(this.state.category, pageNumber);
    }

    render() {
        const {blogs} = this.props;

        return (
            <div className='mt-3 min-vh-100'>

                <div className='container-fluid'>
                    <h3 className='display-4'>{this.state.category}</h3>
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
    blogs: state.blog.categoryBlogs
});

export default connect(mapStateToProps, {getCategoryBlogs})(CategoryBlogs);