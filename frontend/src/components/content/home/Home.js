import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Home.scss';
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";
import SideBar from "../blog/side-bar/SideBar";
import {getBlogs} from "../../../actions/blog/blog";
import {animated, useSpring} from "react-spring";
import Bounce from 'react-reveal/Bounce';
import Fade from "react-reveal/Fade";
import BlogGridBuilder from "../blog/blog-grid-builder/BlogGridBuilder";

export const Home = (props) => {

    const blogs = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    const nextPage = (pageNumber) => {
        dispatch(getBlogs(pageNumber))
    };

    const transition = useSpring({
        from: {transform: 'translate3d(0,-20px,0)'},
        enter: {transform: 'translate3d(0,0px,0)'},
        to: {transform: 'translate3d(0,0px,0)'}
    });

    return (
        <div className='min-vh-100'>
            <animated.div style={transition}
                          className='jumbotron d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-row'>
                    <Bounce left>
                        <div>
                            <h1>Macro</h1>
                        </div>
                    </Bounce>
                    <Bounce right>
                        <div>
                            <h1>Bros</h1>
                        </div>
                    </Bounce>
                </div>

                <div className='d-flex flex-row'>
                    <Fade delay={1000}>
                        <p>
                            Some random shit about macbrobros and below links to some of our shit
                        </p>
                    </Fade>
                </div>

            </animated.div>
            <div className='container-fluid pt-5'>
                <div className='row'>
                    <div className='col-md-9'>
                        <BlogGridBuilder blogs={blogs.results}/>
                    </div>
                    <div className='col-md-3'>
                        <SideBar history={props.history}/>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center my-3'>
                {blogs.totalItems > 2 ?
                    <Pagination><PaginationBar blogs={blogs} nextPage={nextPage}/></Pagination>
                    : null
                }
            </div>
        </div>

    );
};

export default Home;