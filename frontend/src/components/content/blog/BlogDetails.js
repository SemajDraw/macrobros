import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getBlog} from "../../../actions/blog/blog";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import capitalizeFirstLetter from "../../../services/formatHeader";
import Jumbotron from "react-bootstrap/Jumbotron";
import SideBar from "./side-bar/SideBar";
import TradingViewWidget from "react-tradingview-widget";
import './BlogDetails.scss';

export class BlogDetails extends Component {

    static propTypes = {
        blogPost: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getBlog(this.props.match.params.slug);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            this.props.getBlog(this.props.match.params.slug);
        }
    }

    renderBlogContent(content) {
        return {__html: content};
    }

    render() {
        const {blogPost} = this.props;
        console.log(blogPost)
        return (
            <div className='mt-3 min-vh-100'>

                <div className='container-fluid'>
                    <Jumbotron className='d-flex flex-column justify-content-end align-items-start'>
                        <h1 className="display-4 font-italic">{blogPost.title}</h1>
                    </Jumbotron>
                </div>

                <div className='container-fluid pt-3 blog-details'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <h1 className='display-2'>{blogPost.title}</h1>
                            <h2 className='text-muted mt-3'> Category: {capitalizeFirstLetter(blogPost.category)}</h2>
                            <Moment format="Do MMMM YYYY">{blogPost.dateCreated}</Moment>
                            <div className='mt-5 mb-5'
                                 dangerouslySetInnerHTML={this.renderBlogContent(blogPost.summary)}/>
                            <div className='container-fluid px-0 px-md-4 ticker-chart'>
                                {blogPost.slug ?
                                <TradingViewWidget
                                    symbol={blogPost.marketPair}
                                    interval={'60'}
                                    autosize
                                /> : null }
                            </div>
                            <div className='mt-5 mb-5'
                                 dangerouslySetInnerHTML={this.renderBlogContent(blogPost.content)}/>
                        </div>
                        <div className='col-md-3'>
                            <SideBar history={this.props.history}/>
                        </div>
                    </div>
                </div>

                <div className='container-fluid py-3'>
                    <hr/>
                    <Link className='btn btn-primary btn-lg' to='/blog' role='button'>Back to Blogs!</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    blogPost: state.blog.blog
});

export default connect(mapStateToProps, {getBlog})(BlogDetails);