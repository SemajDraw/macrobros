import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBlogs } from "../../../actions/blog/blog";
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";
import SideBar from "./side-bar/SideBar";
import BlogGridBuilder from "./blog-grid-builder/BlogGridBuilder";
import LoadingSpinner from "../../common/LoadingSpinner";

export const SearchBlogs = (props) => {

    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blog.searchBlogs)
    const search = props.match.params.search;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getSearchBlogs(search));
    }, [search]);

    useEffect(() => {
        setIsLoading(false);
    }, [blogs]);

    const loadPages = (pageNumber) => {
        dispatch(getSearchBlogs(search, pageNumber));
    }

    return (
        <div className='mt-3 min-vh-100'>
            <div className='container-fluid'>
                <h3 className='display-4'>Results: { search }</h3>
            </div>
            <div className='container-fluid pt-3'>
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
                    <Pagination><PaginationBar blogs={ blogs } nextPage={ loadPages }/></Pagination>
                    : null
                }
            </div>
        </div>
    );
}

export default SearchBlogs;