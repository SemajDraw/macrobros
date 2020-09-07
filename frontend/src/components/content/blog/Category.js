import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {getCategoryBlogs} from "../../../actions/blogs/blogs";
import capitalizeFirstLetter from "../../../services/capitalizeFirstLetter";
import blogGridBuilder from "./blogGridBuilder";

export class Category extends Component {

    static propTypes = {
        blogs: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {category: this.props.match.params.category};
    }

    componentDidMount() {
        this.props.getCategoryBlogs(this.state.category);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.state.category = this.props.match.params.category;
            this.props.getCategoryBlogs(this.state.category);
        }
    }

    render() {
        const {blogs} = this.props;
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
                <h3 className='display-4'>{capitalizeFirstLetter(this.state.category)}</h3>
                {blogGridBuilder(blogs)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    blogs: state.blog.categoryBlogs
});

export default connect(mapStateToProps, {getCategoryBlogs})(Category);