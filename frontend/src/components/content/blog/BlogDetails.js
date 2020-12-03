import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../../actions/blog/blog";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import TradingViewWidget from "react-tradingview-widget";
import './BlogDetails.scss';
import ActivityBar from "./activity-bar/ActivityBar";
import { formatPageHeading } from "../../../utils/stringUtils";
import { Blog } from "../../common/Routes";

export const BlogDetails = (props) => {

    const blogPost = useSelector(state => state.blog.blog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlog(props.match.params.slug))
    }, [props.match.params.slug]);

    const renderBlogContent = (content) => {
        return { __html: content };
    };

    return (
        <div className='mt-3 min-vh-100'>
            <div className='container mt-5 mb-3'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-10 col-sm-12'>
                        <Jumbotron className='d-flex flex-column justify-content-end align-items-start'>
                            <h1 className="display-4 font-italic">{ blogPost.title }</h1>
                        </Jumbotron>
                    </div>
                </div>
            </div>

            <div className='container'>
                <ActivityBar offsetTop={ 150 } blogPost={ blogPost }/>
                <div className='row sidebar-offset justify-content-center'>
                    <div className='col-lg-8 col-10 col-sm-12'>
                        <h1 className='display-2'>{ blogPost.title }</h1>
                        <h2 className='text-muted mt-3'>{ formatPageHeading(blogPost.category) }</h2>
                        <div className='d-flex justify-content-between'>
                            <span className='d-flex'>
                                <Moment className='mr-2' format="MMM D, YYYY">{ blogPost.dateCreated }</Moment>
                                &middot;
                                <p className='ml-2'>{ blogPost.readTime } read</p>
                            </span>
                        </div>
                        <div className='mt-5 mb-5'
                             dangerouslySetInnerHTML={ renderBlogContent(blogPost.summary) }/>
                        <div className='container-fluid px-0 px-md-4 ticker-chart'>
                            { blogPost.slug ?
                                <TradingViewWidget
                                    symbol={ blogPost.marketPair }
                                    interval={ '60' }
                                    autosize
                                /> : null }
                        </div>
                        <div className='mt-5 mb-5'
                             dangerouslySetInnerHTML={ renderBlogContent(blogPost.content) }/>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-sm-12 col-10'>
                        <hr/>
                    </div>
                    <div className='col-lg-8 col-sm-12 col-10 pt-2 pb-5'>
                        <div className='d-flex justify-content-center' style={ { width: '100%' } }>
                            <Link className='btn btn-primary btn-lg' to={ Blog.BLOGS } role='button'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default BlogDetails;