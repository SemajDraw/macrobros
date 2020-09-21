import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons/faAngleDown";
import './SideBar.scss';
import SearchBar from "./SearchBar";
import {getPopularBlogs} from "../../../../actions/blog/blog";

export class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        popularBlogs: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getPopularBlogs();
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/blog/search/${this.state.searchValue}`);
    }

    popularBlogsList(popularBlogs) {
        return popularBlogs.map((blogPost, i) => {
            return (
                <li key={i} className="list-group-item text-truncate text-format">
                    <Link to={`/blog/${blogPost.slug}`}>{blogPost.title}</Link>
                </li>
            );
        });
    }

    render() {
        const {popularBlogs} = this.props;
        return (
            <>
                <SearchBar history={this.props.history}/>

                <div className="col-12 px-0">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="categories-dropdown list-group-item list-group-item-action drop d-flex justify-content-between  my-auto align-items-center"
                           id="list-home-list"
                           data-toggle="collapse" href="#collapseCategories"
                           aria-expanded="false" aria-controls="collapseCategories">
                            Categories
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </a>
                        <div className="collapse" id="collapseCategories" aria-labelledby="collapseCategories">
                            <Link
                                className='list-group-item list-group-item-action p-s text-muted text-truncate text-format'
                                to='/blog/category/crypto'>Crypto</Link>
                            <Link
                                className='list-group-item list-group-item-action p-s text-muted text-truncate text-format'
                                to='/blog/category/macro'>Macro</Link>
                            <Link
                                className='list-group-item list-group-item-action p-s text-muted text-truncate text-format'
                                to='/blog/category/precious-metals'>Precious Metals</Link>
                            <Link
                                className='list-group-item list-group-item-action p-s text-muted text-truncate text-format'
                                to='/blog/category/wealth-cycles'>Wealth Cycles</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 pl-2 mt-3'>
                    <h4 className='text-truncate'>Popular blogs</h4>
                </div>
                <div className='col-12 px-0 mt-1'>
                    <ul className="list-group list-group-flush">
                        {this.popularBlogsList(popularBlogs)}
                    </ul>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    popularBlogs: state.blog.popularBlogs
});

export default connect(mapStateToProps, {getPopularBlogs})(SideBar);