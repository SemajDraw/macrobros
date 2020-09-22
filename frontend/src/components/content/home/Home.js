import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Home.scss';
import blogGridBuilder from "../blog/blog-grid-builder/blogGridBuilder";
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";
import SideBar from "../blog/side-bar/SideBar";
import Jumbotron from "react-bootstrap/Jumbotron";
import {getBlogs} from "../../../actions/blog/blog";

export const Home = (props) => {

    const blogs = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    const nextPage = (pageNumber) => {
        dispatch(getBlogs(pageNumber))
    };

    return (
        <div className='min-vh-100'>
            <Jumbotron fluid className='d-flex flex-column justify-content-center align-items-center'>
                <h1>MacroBros</h1>
                <p>
                    Some random shit about macbrobros and below links to some of our shit
                </p>
            </Jumbotron>

            <div className='container-fluid pt-5'>
                <div className='row'>
                    <div className='col-md-9'>
                        {blogGridBuilder(blogs.results)}
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