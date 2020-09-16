import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getFeaturedBlog} from "../../../actions/blog/blog";
import PropTypes from "prop-types";
import './Home.scss';

export class Home extends Component {

    static propTypes = {
        featuredBlog: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getFeaturedBlog();
    }

    render() {
        const {featuredBlog} = this.props;
        return (
            <div className="jumbotron featured-heading min-vh-100" style={{backgroundImage: "url(" + featuredBlog.thumbnail + ")"}}>
                    <h1 className="display-4">{featuredBlog.title}</h1>
                    <p className="lead">We make all kinds of awesome blogs about making you dollahs</p>
                    <p>{featuredBlog.excerpt}</p>
                    <Link className='btn btn-primary btn-lg' to={`/blog/${featuredBlog.slug}`} role='button'>Continue reading...</Link>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    featuredBlog: state.blog.featuredBlog
});

export default connect(mapStateToProps, {getFeaturedBlog})(Home);