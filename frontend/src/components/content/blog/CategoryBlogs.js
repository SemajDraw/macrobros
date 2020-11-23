import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryBlogs } from "../../../actions/blog/blog";
import capitalizeFirstLetter from "../../../utils/formatHeader";
import Pagination from "react-bootstrap/Pagination";
import PaginationBar from "../../common/Pagination";
import SideBar from "./side-bar/SideBar";
import BlogGridBuilder from "./blog-grid-builder/BlogGridBuilder";

export const CategoryBlogs = (props) => {

    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blog.categoryBlogs)
    const [category, setCategory] = useState('');

    useEffect(() => {
        setCategory(capitalizeFirstLetter(props.match.params.category));
        dispatch(getCategoryBlogs(props.match.params.category));
    }, [blogs]);

    const loadPages = (pageNumber) => {
        getCategoryBlogs(category, pageNumber);
    }

    return (
        <div className='mt-3 min-vh-100'>
            <div className='container-fluid'>
                <h3 className='display-4'>{ category }</h3>
            </div>
            <div className='container-fluid pt-3'>
                <div className='row'>
                    <div className='col-md-9'>
                        <BlogGridBuilder blogs={ blogs.results }/>
                    </div>
                    <div className='col-md-3'>
                        <SideBar history={ props.history }/>
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

export default CategoryBlogs;
