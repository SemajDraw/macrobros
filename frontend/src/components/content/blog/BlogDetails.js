import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clapBlog, getBlog} from "../../../actions/blog/blog";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import capitalizeFirstLetter from "../../../services/formatHeader";
import Jumbotron from "react-bootstrap/Jumbotron";
import SideBar from "./side-bar/SideBar";
import TradingViewWidget from "react-tradingview-widget";
import ClapButton from 'react-clap-button';
import './BlogDetails.scss';

export const BlogDetails = (props) => {

    const blogPost = useSelector(state => state.blog.blog);
    const dispatch = useDispatch();
    let clapCount = blogPost.claps;

    useEffect(() => {
        dispatch(getBlog(props.match.params.slug))
    }, [props.match.params.slug])

    const renderBlogContent = (content) => {
        return {__html: content};
    }

    const onCountChange = ({ count, countTotal }) => {
        clapCount += countTotal;
        dispatch(clapBlog(blogPost.id))
    };

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
                        <div className='d-flex justify-content-between'>
                                <span className='d-flex'>
                                    <Moment className='mr-2' format="MMM D, YYYY">{blogPost.dateCreated}</Moment>
                                    &middot;
                                    <p className='ml-2'>{blogPost.readTime} read</p>
                                </span>
                            <span>
                                {blogPost.claps}
                                <ClapButton
                                    count={0}
                                    countTotal={clapCount}
                                    maxCount={1}
                                    isClicked={false}
                                    onCountChange={onCountChange}
                                />
                                </span>
                        </div>
                        <div className='mt-5 mb-5'
                             dangerouslySetInnerHTML={renderBlogContent(blogPost.summary)}/>
                        <div className='container-fluid px-0 px-md-4 ticker-chart'>
                            {blogPost.slug ?
                                <TradingViewWidget
                                    symbol={blogPost.marketPair}
                                    interval={'60'}
                                    autosize
                                /> : null}
                        </div>
                        <div className='mt-5 mb-5'
                             dangerouslySetInnerHTML={renderBlogContent(blogPost.content)}/>
                    </div>
                    <div className='col-md-3'>
                        <SideBar history={props.history}/>
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

export default BlogDetails;