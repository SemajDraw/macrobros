import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Home.scss';
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";
import SideBar from "../blog/side-bar/SideBar";
import { getBlogs } from "../../../actions/blog/blog";
import { animated, useSpring } from "react-spring";
import Bounce from 'react-reveal/Bounce';
import Fade from "react-reveal/Fade";
import BlogGridBuilder from "../blog/blog-grid-builder/BlogGridBuilder";
import { MacroBrosIcon } from "../../common/MacroBrosIcon";
import LoadingSpinner from "../../common/LoadingSpinner";

export const Home = (props) => {

    const blogs = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const iconProps = {
        id: 'home-icon',
        strokeColor: '#FFFFFF'
    }

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    useEffect(() => {
        if (blogs.results !== undefined && blogs.results.length !== 0) {
            setIsLoading(false);
        }
    }, [blogs]);

    const nextPage = (pageNumber) => {
        dispatch(getBlogs(pageNumber))
    };

    const transition = useSpring({
        from: { transform: 'translate3d(0,-20px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        to: { transform: 'translate3d(0,0px,0)' }
    });

    return (
        <div className='min-vh-100'>
            <animated.div style={ transition }
                          className='home-jumbotron jumbotron d-flex flex-column justify-content-center align-items-center'>
                <div style={ { animation: `spin ${ 2000 }ms linear` } }
                     className='d-flex flex-row justify-content-center logo-row'>
                    <Bounce delay={ 500 } top>
                        <div className='logo-container'>
                            <MacroBrosIcon key={ 'home-icon' } props={ iconProps }/>
                        </div>
                    </Bounce>
                </div>
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
                    <Fade delay={ 1000 }>
                        <p>
                        </p>
                    </Fade>
                </div>

            </animated.div>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-9'>
                        { isLoading ?
                            <LoadingSpinner isLoading={ isLoading }/> :
                            <BlogGridBuilder blogs={ blogs.results }/>
                        }
                    </div>
                    <div className='col-12 col-md-4 col-lg-3'>
                        <SideBar props={ props }/>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center my-3'>
                { blogs.totalItems > 2 ?
                    <Pagination><PaginationBar blogs={ blogs } nextPage={ nextPage }/></Pagination>
                    : null
                }
            </div>
        </div>

    );
};

export default Home;