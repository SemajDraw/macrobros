import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getBlog} from "../../../actions/blog/blog";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import capitalizeFirstLetter from "../../../services/capitalizeFirstLetter";

export class BlogDetails extends Component {

    static propTypes = {
        blogPost: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getBlog(this.props.match.params.slug);
    }

    renderBlogContent(content) {
        return {__html: content};
    }

    render() {
        const {blogPost} = this.props;
        return (
            <div className='container mt-4'>
                <h1 className='display-2'>{blogPost.title}</h1>
                <h2 className='text-muted mt-3'> Category: {capitalizeFirstLetter(blogPost.category)}</h2>
                <Moment format="Do MMMM YYYY">{blogPost.dateCreated}</Moment>
                <div className='mt-5 mb-5' dangerouslySetInnerHTML={this.renderBlogContent(blogPost.content)}/>
                <hr/>
                <Link className='btn btn-primary btn-lg' to='/blog' role='button'>Back to Blogs!</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    blogPost: state.blog.blog
});

export default connect(mapStateToProps, {getBlog})(BlogDetails);