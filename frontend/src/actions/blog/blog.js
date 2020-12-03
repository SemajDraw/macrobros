import {
    CLAP_BLOG,
    GET_BLOG,
    GET_BLOG_CATEGORIES,
    GET_BLOGS,
    GET_CATEGORY_BLOGS,
    GET_FEATURED_BLOG,
    GET_POPULAR_BLOGS,
    SEARCH_BLOGS
} from "./types";
import axios from "axios";

export const getBlog = (slug) => (dispatch) => {
    axios.get(`/api/blog/${slug}`)
        .then(res => {
            dispatch({
                type: GET_BLOG,
                payload: res.data
            })
        }).catch();
};

export const getBlogCategories = () => (dispatch) => {
    axios.get('/api/blog/categories')
        .then(res => {
            dispatch({
                type: GET_BLOG_CATEGORIES,
                payload: res.data
            });
        }).catch();
};

export const getFeaturedBlog = () => (dispatch) => {
    axios.get('/api/blog/featured')
        .then(res => {
            dispatch({
                type: GET_FEATURED_BLOG,
                payload: res.data[0]
            });
        }).catch();
};

export const getPopularBlogs = () => (dispatch) => {
    axios.get('/api/blog/popular')
        .then(res => {
            dispatch({
                type: GET_POPULAR_BLOGS,
                payload: res.data
            });
        }).catch();
};

export const getBlogs = (pageNumber) => (dispatch) => {
    let url;
    pageNumber === undefined ? url = '/api/blog/' : url = '/api/blog/?page='.concat(pageNumber);
    axios.get(url)
        .then(res => {
            dispatch({
                type: GET_BLOGS,
                payload: res.data
            });
        }).catch();
};

export const getCategoryBlogs = (category, pageNumber) => (dispatch) => {
    let url;
    pageNumber === undefined ? url = '/api/blog/category' : url = '/api/blog/category?page='.concat(pageNumber);
    axios.post(url,
        {category: category},
        {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            dispatch({
                type: GET_CATEGORY_BLOGS,
                payload: res.data
            })
        }).catch();
};

export const getSearchBlogs = (search, pageNumber) => (dispatch) => {
    let url;
    pageNumber === undefined ? url = '/api/blog/search' : url = '/api/blog/search?page='.concat(pageNumber);
    axios.post(url,
        {search: search},
        {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            dispatch({
                type: SEARCH_BLOGS,
                payload: res.data
            })
        }).catch();
};

export const clapBlog = (blogId) => (dispatch) => {
    axios.put('/api/blog/add-clap', {blogId: blogId})
        .then(res => {
            dispatch({
                type: CLAP_BLOG,
                payload: res.data
            })
        }).catch();
};
