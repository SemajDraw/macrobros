import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {getCategoryBlogs} from "../../../actions/blog/blog";
import capitalizeFirstLetter from "../../../services/capitalizeFirstLetter";
import blogGridBuilder from "./blogGridBuilder";
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";

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
            <div className='container mt-3'>
                <div className='nav-scroller py-1 mb-2'>
                    <nav className='nav d-flex justify-content-between'>
                        <Link className='p-s text-muted' to='/blog/category/crypto'>Crypto</Link>
                        <Link className='p-s text-muted' to='/blog/category/precious-metals'>Precious Metals</Link>
                        <Link className='p-s text-muted' to='/blog/category/economics'>Economics</Link>
                        <Link className='p-s text-muted' to='/blog/category/macro'>Macro</Link>
                        <Link className='p-s text-muted' to='/blog/category/wealth-cycles'>Wealth Cycles</Link>
                        <Link className='p-s text-muted' to='/blog/category/tech'>Tech</Link>
                        <Link className='p-s text-muted' to='/blog/category/trading'>Trading</Link>
                        <Link className='p-s text-muted' to='/blog/category/investment'>Investment</Link>
                    </nav>
                </div>
                <h3 className='display-4'>{this.state.category}</h3>
                {blogGridBuilder(blogs.results)}

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