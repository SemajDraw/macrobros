import capitalizeFirstLetter from "../../../services/capitalizeFirstLetter";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import React from "react";

export default (blogs) => {
    let blogPostMarkup = blogs.map((blogPost) => {
        return (
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">
                        {capitalizeFirstLetter(blogPost.category)}
                    </strong>
                    <h3 className="mb-0">
                        <a className="text-dark" href="#">{blogPost.title}</a>
                    </h3>
                    <div className="mb-1 text-muted">
                        <Moment format="Do MMMM YYYY">{blogPost.dateCreated}</Moment>
                    </div>
                    <p className="card-text mb-auto">{blogPost.excerpt}</p>
                    <Link className='stretched-link' to={`/blog/${blogPost.slug}`}>Continue reading</Link>
                </div>
                <img width='200' height='250' className="card-img-right flex-auto d-none d-md-block"
                     src={blogPost.thumbnail} alt=":)"/>
            </div>
        );
    });
    let blogPostGrid = [];
    for (let i = 0; i < blogPostMarkup.length; i += 2) {
        blogPostGrid.push(
            <div key={i} className='row mb-2'>
                <div className='col-md-6'>
                    {blogPostMarkup[i]}
                </div>
                <div className='col-md-6'>
                    {blogPostMarkup[i + 1] ? blogPostMarkup[i + 1] : null}
                </div>
            </div>
        )
    }
    return blogPostGrid;
}