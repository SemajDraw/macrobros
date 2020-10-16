import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clapBlog, getBlog} from "../../../actions/blog/blog";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import capitalizeFirstLetter from "../../../services/formatHeader";
import Jumbotron from "react-bootstrap/Jumbotron";
import TradingViewWidget from "react-tradingview-widget";
import ClapButton from 'react-clap-button';
import StickyBox from 'react-sticky-box';
import './BlogDetails.scss';

export const BlogDetails = (props) => {

    const blogPost = useSelector(state => state.blog.blog);
    const dispatch = useDispatch();
    const sideBarRef = useRef(null);
    const sideBarHeight = sideBarRef.current !== null ? sideBarRef.current.nodeHeight : 0;
    let clapCount = blogPost.claps;

    useEffect(() => {
        dispatch(getBlog(props.match.params.slug))
    }, [props.match.params.slug])

    const renderBlogContent = (content) => {
        return {__html: content};
    }

    const onCountChange = ({count, countTotal}) => {
        clapCount += countTotal;
        dispatch(clapBlog(blogPost.id))
    };

    return (
        <div className='mt-3 min-vh-100'>

            <div className='container mt-5 mb-3'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-10 col-sm-12'>
                        <Jumbotron className='d-flex flex-column justify-content-end align-items-start'>
                            <h1 className="display-4 font-italic">{blogPost.title}</h1>
                        </Jumbotron>
                    </div>
                </div>
            </div>

            <div className='container'>
                <StickyBox style={{marginTop: '10px'}} ref={sideBarRef} id='side-bar' offsetTop={150} offsetBottom={100}>
                    <div>
                        <ClapButton
                            count={0}
                            countTotal={clapCount}
                            maxCount={1}
                            isClicked={false}
                            onCountChange={onCountChange}
                        />
                    </div>
                </StickyBox>
                <div style={{marginTop: `-${sideBarHeight + 30}px`}}
                     className='row justify-content-center'>
                    <div className='col-lg-8 col-10 col-sm-12'>
                        <h1 className='display-2'>{blogPost.title}</h1>
                        <h2 className='text-muted mt-3'> Category: {capitalizeFirstLetter(blogPost.category)}</h2>
                        <div className='d-flex justify-content-between'>
                            <span className='d-flex'>
                                <Moment className='mr-2' format="MMM D, YYYY">{blogPost.dateCreated}</Moment>
                                &middot;
                                <p className='ml-2'>{blogPost.readTime} read</p>
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
                </div>
            </div>

            <div className='container py-3'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-sm-12 col-10'>
                        <hr/>
                        <Link className='btn btn-primary btn-lg' to='/blog' role='button'>Back to Blogs!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;