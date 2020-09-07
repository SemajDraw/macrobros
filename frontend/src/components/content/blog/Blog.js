import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getBlogs, getFeaturedBlog} from "../../../actions/blogs/blogs";
import {Link} from "react-router-dom";
import Moment from "react-moment";
import blog from "../../../reducers/blog";

export class Blog extends Component {

    static propTypes = {
        blogs: PropTypes.array,
        featuredBlog: PropTypes.object
    };

    componentDidMount() {
        this.props.getBlogs();
        this.props.getFeaturedBlog();
    }

    capitalizeFirstLetter(word) {
        if (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return '';
    }

    renderBlogs(blogs) {
        let blogPostMarkup = blogs.map((blogPost) => {
            return (
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-primary">
                            {this.capitalizeFirstLetter(blogPost.category)}
                        </strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">{blogPost.title}</a>
                        </h3>
                        <div className="mb-1 text-muted">
                            <Moment format="Do MMMM YYYY">{blogPost.dateCreated}</Moment>
                        </div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link className='stretched-link' to={`/blog/${blogPost.slug}`}>Continue reading</Link>
                    </div>
                    <img width='200' height='250' className="card-img-right flex-auto d-none d-md-block"
                         src={blogPost.thumbnail} alt=":)"/>
                </div>
            );
        });
        let blogPostGrid = [];
        for (let i = 0; i < blogPostMarkup.length; i += 2) {
            blogPostGrid.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {blogPostMarkup[i]}
                    </div>
                    <div className='col-md-6'>
                        {blogPostMarkup[i + 1] ? blogPostMarkup[i + 1] : null}
                    </div>
                </div>
            )
        }
        return blogPostGrid;
    };


    render() {
        const blogs = this.props.blogs;
        const featuredBlog = this.props.featuredBlog;
        console.log(featuredBlog);
        if (blogs === undefined || featuredBlog === undefined) {
            return null;
        }

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
                            <Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">Continue
                                reading...</Link>
                        </p>
                    </div>
                </div>

                {this.renderBlogs(blogs)}
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    blogs: state.blog.blogs,
    featuredBlog: state.blog.featuredBlog
});

export default connect(mapStateToProps, {getBlogs, getFeaturedBlog})(Blog);